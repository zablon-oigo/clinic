import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Doctors() {
    const slider = useRef(null);

    const settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    const data=[
        {
            index:1,
            name:'Dr. John Doe',
            speciality:'Cardiology',
            img:'src/assets/doc6.jpg'
        },
        {
            index:2,
            name:'Dr. Jane Smith',
            speciality:'Dermatology',
            img:'src/assets/doc2.jpg'
        },
        {
            index:3,
            name:'Dr. Michael Johnson',
            speciality:'Neurology',
            img:'src/assets/doc3.jpg'
        },
        {
            index:4,
            name:'Dr. Emily Davis',
            speciality:'Orthopedics',
            img:'src/assets/doc4.jpg'
        },
        {
            index:5,
            name:'Dr. William Wilson',
            speciality:'Gastroenterology',
            img:'src/assets/doc5.jpg'
        },
        {
            index:6,
            name:'Dr. Olivia Taylor',
            speciality:'Pulmonology',
            img:'src/assets/doc1.jpg'
        }
    ]
  return (
    <div className="min-h-[80vh] flex flex-col justify-center md:px-20 px-4 ">
       <div className="">
       <div className="md:-mt-40">
            <h1 className="mb-4 text-center text-5xl  font-semibold">Our <span className="text-teal-500">Doctors</span></h1>
            <p className=" px-10 md:px-0 mb-10 text-xl font-sans font-light">
            Our dedicated team of skilled and compassionate doctors at bora Clinic  is committed to your well-being. With expertise across various specialties, we provide personalized care to ensure your optimal health.
            </p>
        </div>
    <div className="flex gap-5 items-center justify-between">
     <button onClick={() => slider.current.slickPrev()} className="bg-[#d5f2ec] text-teal-500 rounded-full px-2 py-2 active:bg-[#ade9dc]">
       <FaArrowLeft size={30} />
       </button>
       <button onClick={() => slider.current.slickNext()} className="bg-[#d5f2ec] text-teal-500 rounded-full px-2 py-2 active:bg-[#ade9dc]">
       <FaArrowRight size={30} />
       </button>
     </div>
     <div className="mt-5 p-4">
     <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.speciality}</h3>
              </div>
            </div>
          ))}
        </Slider>
     </div>
       </div>
  
    </div>
  )
}

export default Doctors