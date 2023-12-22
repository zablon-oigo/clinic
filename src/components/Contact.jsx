import React from 'react'

function Contact(closeForm) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className=" popup-form absolute mt-5 bg-white text-black rounded-xl shadow-2xl">
            <form action="" className="w-80 md:w-96 space-y-5 p-5 rounded-xl">
               <h1 className="text-4xl text-teal-500 font-semibold text-center">Book Now</h1>
               <div className="flex flex-col">
                <input type="text" className="py-3 px-3 bg-[#d5f2ec] rounded-xl " placeholder='First Name' />
               </div>
               <div className="flex flex-col">
                <input type="text" className="py-3 px-3 bg-[#d5f2ec] rounded-xl " placeholder='Last Name' />
               </div>
               <div className="flex flex-col">
                <input type="email" className="py-3 px-3 bg-[#d5f2ec] rounded-xl " placeholder='Email' />
               </div>
               <div className="flex flex-col">
                <input type="number" className="py-3 px-3 bg-[#d5f2ec] rounded-xl " placeholder='Phone' />
               </div>
               <div className="flex justify-between text-white md:text-lg text-sm ">
                <button className="py-3 px-6 bg-blue-500 hover:bg-blue-700 duration-500 transition-all rounded-xl">
                    Book Appointment
                </button>
                <button className="py-3 px-6 bg-rose-500 hover:bg-rose-700 duration-500 transition-all rounded-xl" onClick={closeForm}>
                    Cancel
                </button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Contact