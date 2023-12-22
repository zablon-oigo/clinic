import React from 'react'
import about from '../assets/about.png'
function About() {
  return (
    <div className='min-h-screen flex bg-gray-100 flex-col md:flex-row justify-between items-center md:px-20 px-5 '>
          <div className="mb-4 w-full md:w-2/3 space-y-5 md:pt-20 pt-0">
        <h2 className="text-6xl text-center font-sans font-semibold">About <span className="text-teal-500">Us</span></h2>
             <div className="space-y-4 text-xl font-sans font-light">
             <p className="">
            Welcome to afya clinic, where we are dedicated to providing exceptional healthcare with a human touch. Founded on the principles of compassion, expertise, and innovation, our clinic is committed to empowering individuals to make informed health choices for a better and brighter future.
        </p>
        <p className="">
            At afya clinic, we understand that each patient is unique, and we tailor our services to meet your specific needs. Our team of experienced and compassionate healthcare professionals is here to ensure that you receive the highest quality care in a supportive and welcoming environment.
        </p>
        <p className="">
            What sets us apart is our focus on holistic well-being. We not only treat symptoms but also address the root causes of health issues, promoting long-term health and vitality. Whether you're in need of routine check-ups, specialized treatments, or preventive care, our dedicated team is here to guide you on your health journey.
        </p>
        <p className="">
            Afya clinic is more than a healthcare provider; we are a partner in your wellness. Thank you for choosing us to be a part of your healthcare experience. We look forward to serving you and your family with the utmost care and professionalism.
        </p>
             </div>
    </div>
    <div className="w-full md:w-1/2">
      <img src={about} alt="" />
    </div>
</div>
  )
}

export default About