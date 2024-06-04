import React from 'react'

const Footer = () => {
  return (
    

<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-purple-300 border-t border-purple-100 shadow md:flex md:items-center md:justify-between md:p-6 ">
<div className='logo font-bold text-white text-l'>
      <span className='text-black'> &lt;</span>Encryp<span className='text-black'>SAFE/&gt;</span>
      </div>
    <span className="text-sm text-indigo-950 sm:text-center ">© 2024<a href="https://github.com/AdityaSrivastavaaa/ " target='_blank' class="hover:underline"> Aditya Srivastava</a>. All Rights Reserved.
    </span>

    
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-indigo-950  sm:mt-0">
          

        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer
