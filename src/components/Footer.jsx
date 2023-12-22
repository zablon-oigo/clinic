import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the current year in the state
        const intervalId = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
        }, 1000); // Update every second
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures the effect runs only once
    
    
  return (
    <div>
         <footer className="bg-teal-500 font-sans rounded-t-xl text-white md:px-20 px-5">
            <div className="flex justify-between flex-col md:flex-row py-20">
                <div className="w-full md:w-2/3 mb-4 ">
                    <h2 className="mb-6 text-3xl font-semibold">Afya Clinic</h2>
                    <p className="font-sans text-xl font-light">
                    Welcome to afya clinic, where we are dedicated to providing exceptional healthcare with a human touch. Founded on the principles of compassion, expertise, and innovation, our clinic is committed to empowering individuals to make informed health choices for a better and brighter future.
                    At afya clinic, we understand that each patient is unique, and we tailor our services to meet your specific needs. Our team of experienced and compassionate healthcare professionals is here to ensure that you receive the highest quality care in a supportive and welcoming environment.
                    </p>
                </div>
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between">
                    <div className="mb-4 ">
                    <h2 className="mb-6 text-3xl font-semibold">About Us</h2>
                    <div className=" md:mx-2  flex flex-col gap-4">
            <Link to={'about'} smooth={true} spy={true} duration={500}  className='cursor-pointer text-xl font-light hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>About Us</h1>
          </Link>
          <Link to={'services'} smooth={true} spy={true} duration={500}  className='cursor-pointer text-xl font-light hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Services</h1>
          </Link>
          <Link to={'doctors'} smooth={true} spy={true} duration={500}  className='cursor-pointer text-xl font-light hover:text-gray-600 hover:delay-300 transition-all hover:duration-500'>
            <h1>Doctors</h1>
          </Link>
                    </div>

                </div>
                <div className="mb-4">
                    <h2 className="mb-6 text-3xl font-semibold">Services</h2>
                    <ul className="text-xl font-light space-y-4">
                        <li className="">Lab Test</li>
                        <li className="">Health Checkup</li>
                        <li className="">Heart Care</li>
                    </ul>

                </div>
                <div className="">
                    <h2 className="mb-6 text-3xl font-semibold">Contact Us</h2>
                    <p className="text-xl font-light">
                    123 Main Street<br/>
                    Anytown, USA 12345<br/>
                    (123) 456-7890

                    </p>
                    <div className="my-2">
                        <h2 className="text-2xl font-medium">Social</h2>
                        <div className="flex gap-4 mt-4">
                        <FaFacebook  size={30}/>
                        <FaInstagram size={30} />
                        <SiGmail  size={30}/>
                        <FaTwitter  size={30}/>
                        <FaYoutube  size={30} />
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            
            <p className="text-center font-light text-lg font-sans ">&copy; {currentYear} Afya Clinic | All Rights Reserved</p>
         </footer>

    </div>
  )
}

export default Footer