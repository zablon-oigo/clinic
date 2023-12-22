import React from 'react'
import Button from '../layout/Button'
import Servicecard from '../layout/Servicecard'
import { GiMicroscope } from "react-icons/gi"
import { LiaStethoscopeSolid } from "react-icons/lia";
import { FaHeartbeat } from "react-icons/fa";
function Services() {

    const icon1=<GiMicroscope size={50} className='text-teal-500' />
    const icon2=<LiaStethoscopeSolid  size={50} className='text-teal-500'/>
    const icon3=<FaHeartbeat  size={50} className='text-teal-500'/>
    
    const data=[
        {
            title:'Laboratory Services',
            icon:icon1,
            description:'Latest healthcare advancements at bora Clinic ensure cutting-edge treatments. Our expert team combines innovation with compassionate care, prioritizing your well-being and offering state-of-the-art solutions for a healthier future.'
        },
        {
            title:'Healthcare Consultation',
            icon:icon2,
            description:'Prioritize your well-being with our comprehensive health checkups. From preventive screenings to personalized consultations, we ensure a thorough assessment to empower you on your journey to lasting health and vitality.'
        },
        {
            title:'Heart Care',
            icon:icon3,
            description:'Discover peace of mind with our specialized heart checkups. Our advanced diagnostics and expert cardiology team focus on proactive cardiovascular health, ensuring a thorough assessment and personalized care for a stronger heart.'
        }
    ]
  return (
    <div>

        <div className="min-h-screen  md:px-20 md:py-10 py-5 px-5">
        <h2 className="text-5xl mb-4 font-semibold">Our <span className="text-teal-500">Services</span></h2>
            <div className="mb-10 flex flex-col items-center md:flex-row justify-between">
                <div className="w-full md:w-3/4">
                <p className="font-sans text-lg font-light mb-4">
                At Afya Clinic, we take pride in offering a comprehensive range of healthcare services to meet your diverse needs.
                 From routine check-ups to specialized treatments, our skilled and caring team is dedicated to providing personalized care that prioritizes your well-being. 
                 Our services include preventive care, diagnostics, vaccinations, family medicine, and more. Whether you're seeking expert medical advice or proactive health solutions, we are here to support you on your journey to optimal health.
                </p>
                </div>
                <div className="w-full md:w-1/4 mx-2">
                    <Button title='See Our Services'/>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-6 md:pt-20 pt-0">
                 <Servicecard title={data[0].title} icon={data[0].icon} description={data[0].description}/>
                <Servicecard title={data[1].title} icon={data[1].icon} description={data[1].description}/>
                <Servicecard title={data[2].title} icon={data[2].icon} description={data[2].description}/>

                 </div>
            </div>
           
        </div>
  )
}

export default Services