import React from 'react'
import add from "/icons8-add.gif"
const Manager = () => {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    
    <div className=' bg-slate-500 myContainer ' >
      <div className='text-white text-4xl font-bold text-center'>
      <span className='text-black'> &lt;</span>Encryp<span className='text-black'>SAFE/&gt;</span>
      </div>
      
      <p className='text-lg font-bold text-center'>Your Own Password Manager</p>
      <div className='text-black flex flex-col p-4 gap-8'>
           <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name='' id='' />
           <div className='flex w-full gap-8'>
           <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name='' id='' />
           <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name='' id='' />

           </div>
           <button className='flex justify-center items-center rounded-full px-2 py-2  w-fit bg bg-purple-500'>
          <img src={add} className='w-6 ' alt="" /> Add Password</button>
      </div>
     

    </div>
    
    </div>

  )
}

export default Manager
