import React from 'react'
import git from "/github.png"
const Navbar = () => {
  return (
    <nav className='bg bg-purple-800  sticky top-0 z-50'>
      <div className='flex items-center justify-between px-4 h-18 myContainer py-3 text-white'>

      
      <div className='logo font-bold text-white text-2xl'>
      <span className='text-black'> &lt;</span>Encryp<span className='text-black'>SAFE/&gt;</span>
      </div>
      {/* <ul>
        <li className='flex gap-4'>
           <a className='hover:font-bold hover:text-black  text-xl' href='/'>Home</a>
           <a className='hover:font-bold hover:text-black  text-xl' href='#'>About</a>
           <a className='hover:font-bold hover:text-black text-xl' href='#'>Contact</a>
        </li>
      </ul> */}
      <button className='flex justify-center items-center  gap-2 rounded-full bg bg-purple-500 px-2 cursor-pointer hover:text-black hover:invert-0'>
        <h1 className='hover:text-black font-bold'>Github</h1>
        <img className='invert cursor-pointer hover:invert-0' src={git} alt="Github logo" />
      </button>
      </div>
    </nav>
  )
}

export default Navbar
