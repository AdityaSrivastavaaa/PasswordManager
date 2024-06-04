import React, { useEffect } from "react";
import add from "/icons8-add.gif";
import edit from "/icons8-edit.gif";
import show from "/show.png";
import Delete from "/delete.png";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import copy from "/icons8-copy.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [passwordArray, setpasswordArray] = useState([]);
  const [form, setform] = useState({ site: "", username: "", password: "" });

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    passwordRef.current.type = "text";
    //  alert("show the password!!!")
    if (ref.current.src.includes("/hide.png")) {
      ref.current.src = "/show.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "/hide.png";
    }
  };

  const copyText = (text) => {
    toast("Copied to Clipboard!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setform({site:"",username:"",password:""})
  };
  const deletePassword = (id) => {
    setpasswordArray(passwordArray.filter(item=>item.id!==id));

    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
    
  };
  const editPassword = (id)=>{
     setform(passwordArray.filter(i=>i.id===id)[0]);
     setpasswordArray(passwordArray.filter(item=>item.id!==id))
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
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
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-purple-500 w-full p-6 py-1"
                type="password"
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
            <img src={add} className="w-6 " alt="" /> Save
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show </div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md ">
              <thead className="bg bg-purple-600 text-white">
                <tr>
                  <th className="py-3">Site</th>
                  <th className="py-3">User Name</th>
                  <th className="py-3">Password</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg bg-purple-200">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center   gap-3">
                        <div className="flex items-center justify-center">
                          {item.site}
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <img src={copy} alt="" />
                          </div>
                        </div>
                      </td>

                      <td className="  py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          {item.username}{" "}
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <img src={copy} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          {item.password}{" "}
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <img src={copy} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 border border-white items-center  ">
                        <div className="flex items-center justify-center gap-5">
                          <span className="cursor-pointer" onClick={()=>{editPassword(item.id)}}>
                            <img className="w-5 " src={edit} alt="" />
                          </span>
                          <span className="cursor-pointer" onClick={()=>{deletePassword(item.id)}}>
                            <img className="w-5 " src={Delete} alt="" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
