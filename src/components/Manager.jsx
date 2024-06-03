import React, { useEffect } from "react";
import add from "/icons8-add.gif";
import show from "/show.png";
import { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [passwordArray, setpasswordArray] = useState([]);
  const [form, setform] = useState({ site: "", username: "", password: "" });

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    //  alert("show the password!!!")
    if (ref.current.src.includes("/hide.png")) {
      ref.current.src = "/show.png";
    } else {
      ref.current.src = "/hide.png";
    }
  };

  const savePassword = () => {
    console.log(form);
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className=" myContainer ">
        <div className="text-purple-500 text-4xl font-bold text-center">
          <span className="text-black"> &lt;</span>Encryp
          <span className="text-black">SAFE/&gt;</span>
        </div>

        <p className="text-lg font-bold text-center">
          Your Own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-purple-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative flex justify-center items-center ">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-purple-500 w-full p-6 py-1"
                type="text"
                name="password"
                id=""
              />
              <span
                className="absolute right-2 top-1 cursor-pointer"
                onClick={showPassword}
              >
                <img width={25} ref={ref} src={show} alt="" />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center rounded-full px-5 py-3  w-fit bg bg-purple-400 hover:bg-purple-300 gap-2 border border-purple-900"
          >
            <img src={add} className="w-6 " alt="" /> Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0  && <div>No Passwords to show </div>}
          { passwordArray.length !=0 && <table className="table-auto w-full overflow-hidden rounded-md ">
            <thead className="bg bg-purple-600 text-white">
              <tr>
                <th className="py-3">Site</th>
                <th className="py-3">User Name</th>
                <th className="py-3">Password</th>
              </tr>
            </thead>
            <tbody className="bg bg-purple-200">
              {passwordArray.map((item , index)=>{
                return <tr key={index}>
                <td className=" py-2 border border-white text-center min-w-32">{item.site}</td >
                <td className=" py-2 border border-white text-center min-w-32">{item.username}</td >
                <td className=" py-2 border border-white text-center min-w-32">{item.password}</td>
              </tr>
              })}
              
              
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  );
};

export default Manager;
