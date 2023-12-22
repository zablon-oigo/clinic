import React from 'react'

function Servicecard({icon,title,description}) {
  return (
    <div className=''>
        <div className="group flex flex-col items-center gap-2 p-6 bg-white shadow-2xl rounded-lg cursor-pointer lg:hover:-translate-y-6 transition-all max-w-md duration-300 ease-in-out">
            <div className="bg-[#d5f2ec]  transition-colors duration ease-in-out  group-hover:bg-[#ade9dc] rounded-full">
                {icon}
            </div>
            <h2 className="text-xl font-sans font-semibold">
                {title}
            </h2>
            <p className=" text-center font-light font-sans transition duration-300 ease-in-out cursor-pointer hover:text-[#1e493f]">
                {description}
            </p>
            <a href="" className="text-center text-teal-300 ">learn more...</a>
        </div>
    </div>
  )
}

export default Servicecard