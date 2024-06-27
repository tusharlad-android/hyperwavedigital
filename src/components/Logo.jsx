import React from 'react';
import logo from '../assets/logo.png';


const Logo = () => {
  return (
    <div className='flex items-center'>
       <img src={logo} alt="hyper" className='w-[35px] h-[35px] object-contain'/>
       <h1 className= "font-poppins text-xl text-white">Hyper<span className='text-[#33FFFF]'>Wave</span></h1>
    </div>
  );
}

export default Logo;
