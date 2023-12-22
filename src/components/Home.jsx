import React from 'react'
import Button from '../layout/Button'
function Home() {
  return (
<>
        <div className="min-h-screen  text-white bg-[url('assets/doctor.jpg')] bg-no-repeat bg-cover bg-center ">
                <div className="flex flex-col justify-center bg-opacity-50 bg-black h-screen md:px-32 px-0  ">
                <div className="w-full md:w-4/5 px-4 md:px-0 space-y-5  ">
                <h1 className="md:text-6xl text-3xl font-bold leading-tight capitalize">Empowering <span className="text-teal-500">Health</span> Choices for a Better Future...</h1>
                <p className="md:text-2xl text-xl  font-light font-sans">
                    Welcome to  afya clinic, where your well-being is our priority.
                     At our clinic, we believe in personalized care and compassionate support on your health journey.
                    Whether youre seeking preventive care or specialized treatments, our dedicated team is here to guide you every step of the way. 
                    Your health is in good hands.
                </p>
                <div className="">
                    <Button title='See Our Services'/>
                </div>
            </div>
                </div>

        </div>
</>
  )
}

export default Home