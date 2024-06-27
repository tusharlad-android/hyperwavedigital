import {useState} from 'react'

import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Logo from './Logo';


const Navbar = () => {
  const [toggle, setToggle]=useState(false);

  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <div className='w-[124px] h-[32px]    '>
          <Logo/>
        </div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li  key="home" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`} >
            <a href="#home">
            Home
            </a>
            
           
            
          </li>
          <li key="about" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`} >
            <a href="#about">

            About
            </a>
            
          </li>
          <li key="services" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`} >
            <a href="#services">

            Services
            </a>
            
          </li>
          <li key="contacts" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-5 `} >
            <a href="#contacts">

            Contact us
            </a>
            
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu}
                alt="menu"
                className='w-[28px] h-[28px]
                object-contain'
                onClick={()=>setToggle((prev)=>(!prev))}
          />
        </div>
        <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          <li key="home" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}>
            <a href="#home">
            Home
            </a>
          </li>
          <li key="about" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}>
            <a href="#about">
            About
            </a>
          </li>
          <li key="services" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}>
            <a href="#services">
            Services
            </a>
          </li>
          <li key="contacts" className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-5 `}>
            <a href="#contact">
            Contact us
            </a>
          </li>
        </ul>  
        </div>

        </nav>
    </div>
  )

}

export default Navbar
