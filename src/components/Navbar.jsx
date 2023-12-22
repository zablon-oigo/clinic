import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Contact from './Contact';

function Navbar() {
    const[menu,setMenu]=useState(false)
    const[showForm, setShowForm]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
    }
    const openForm=()=>{
        setShowForm(true)
        setMenu(false)
    }
    const closeForm=()=>{
        setShowForm(false)
        setMenu(false)
    }
    const closeMenu=()=>{
        setMenu(false)
    }
    return (
    <div className='relative z-10  bg-teal-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <nav className="flex flex-row items-center justify-between text-white p-6 md:mx-32 mx-5 ">
        <div className="">
          <Link to={'/'} smooth={true} spy={true} duration={500}  className='cursor-pointer text-3xl font-semibold'>
            <h1>Afya Clinic</h1>
          </Link>
        </div>
        <div className="text-xl  gap-8 hidden md:flex flex-row items-center justify-between ">
          <Link to={'home'} smooth={true} spy={true} duration={500}  className='cursor-pointer hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Home</h1>
          </Link>
          <Link to={'about'} smooth={true} spy={true} duration={500}  className='cursor-pointer hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>About Us</h1>
          </Link>
          <Link to={'services'} smooth={true} spy={true} duration={500}  className='cursor-pointer hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Services</h1>
          </Link>
          <Link to={'doctors'} smooth={true} spy={true} duration={500}  className='cursor-pointer hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Doctors</h1>
          </Link>
          <Link to={'blog'} smooth={true} spy={true} duration={500}  className='cursor-pointer hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Blog</h1>
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center justify-center">
            <button onClick={openForm} className="font-medium bg-blue-500 rounded hover:border-2 hover:border-white text-white  hover:bg-white hover:text-teal-500 hover:duration-700  hover:translate-x-4 transition-transform hover:ease-in-out px-6 py-3 ">
                Contact Us
            </button>
        </div>
        {showForm && <Contact closeForm={closeForm}/>}
        <div className="md:hidden">
            <button className=""onClick={toggleMenu}>
                {menu?<AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
            </button>
        </div>
      </nav>
      <section className={`${menu?'translate-x-0':'-translate-x-full'} absolute top-[78px] right-0 w-full transition-transform duration-500 h-screen  bg-black  z-[-1] text-white  p-8`}>
      <div className="text-5xl  gap-12  flex flex-col items-center justify-center ">
          <Link to={'home'} smooth={true} spy={true} duration={500} onClick={closeMenu} className='cursor-pointer hover:text-teal-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Home</h1>
          </Link>
          <Link to={'about'} smooth={true} spy={true} duration={500} onClick={closeMenu} className='cursor-pointer hover:text-teal-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>About Us</h1>
          </Link>
          <Link to={'services'} smooth={true} spy={true} duration={500} onClick={closeMenu} className='cursor-pointer hover:text-teal-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Services</h1>
          </Link>
          <Link to={'doctors'} smooth={true} spy={true} duration={500} onClick={closeMenu} className='cursor-pointer hover:text-teal-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Doctors</h1>
          </Link>
          <Link to={'blog'} smooth={true} spy={true} duration={500} onClick={closeMenu} className='cursor-pointer hover:text-teal-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Blog</h1>
          </Link>
        </div>
        <div className="my-12 mx-auto flex items-center justify-center">
            <button onClick={openForm} className="font-medium bg-blue-500 rounded hover:border-2 hover:border-white text-white  hover:bg-black hover:duration-700 hover:delay-300 hover:scale-105 transition-transform hover:ease-in-out px-10 py-4 ">
                Contact Us
            </button>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
