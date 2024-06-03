import React from 'react'
import logo from "../assets/logo-no-background.png"
const Navbar = () => {
  return (
    <nav className='bg bg-purple-800 '>
      <div className='flex items-center justify-between px-4 h-18 myContainer py-3 text-white'>

      
      <div className='logo font-bold text-white text-2xl'>
      <span className='text-black'> &lt;</span>Encryp<span className='text-black'>SAFE/&gt;</span>
      </div>
      <ul>
        <li className='flex gap-4'>
           <a className='hover:font-bold hover:text-black  text-xl' href='/'>Home</a>
           <a className='hover:font-bold hover:text-black  text-xl' href='#'>About</a>
           <a className='hover:font-bold hover:text-black text-xl' href='#'>Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
