import React from 'react'
import Button from '../layout/Button'
import BlogsCard from '../layout/BlogsCard'

function Blogs() {
    const data=[
        {
          headlines:'Mindful Eating for Busy Lives',
          img:'src/assets/food.jpg',
          description:'Discover practical tips and easy recipes to incorporate mindful eating habits into your hectic schedule, promoting better nutrition and overall well-being'  
        },
        {
            headlines:'Fitness Beyond the Gym',
            img:'src/assets/gym.jpg',
            description:'Explore creative and enjoyable ways to stay active outside the traditional gym setting, making fitness an integral part of your daily life for improved physical and mental health.'
        },
        {
            headlines:'Holistic Self-Care Rituals',
            img:'src/assets/care.jpg',
            description:'Dive into holistic self-care practices that nurture your mind, body, and soul. From relaxation techniques to natural skincare, find inspiration for a well-rounded and sustainable self-care routine.'
        },
        {
            headlines:'Navigating Stress: A Comprehensive Guide',
            img:'src/assets/stress.jpg',
            description:'Learn effective strategies to manage stress in various aspects of life. From workplace stress to personal challenges, discover practical solutions for maintaining mental and emotional balance.'
        },
        {
            headlines:'Seasonal Eating for Health',
            img:'src/assets/healthy.jpg',
            description:'Explore the benefits of aligning your diet with the seasons. Learn about nutrient-rich seasonal foods and how they can contribute to your overall health and well-being throughout the year'
        },
        {
            headlines:'Family Fitness Fun',
            img:'src/assets/fitness.jpg',
            description:'Embrace a healthy lifestyle as a family with engaging fitness activities for all ages. Discover enjoyable ways to bond while promoting physical activity, fostering a culture of health within your household.'
        },

    ]
  return (
    <div>
        <div className="bg-gray-100 py-10 min-h-screen  md:px-20 px-5">
                <div className="flex justify-center items-center flex-col md:flex-row">
                <div className="w-full md:w-3/4">
                <h1 className="text-5xl font-semibold mb-4 text-center ">Latest <span className="text-teal-500">Blogs</span></h1>
                <p className="my-4 text-xl font-light font-sans">
                Explore our health blogs for valuable insights and tips on wellness. From nutrition advice to lifestyle changes, our informative content is designed to empower you on your journey to a healthier life.
                </p>
            </div>
            <div className="w-full md:w-1/4 mx-2">
                <Button title="View All Blogs"/>
            </div>
                </div>
                <div className="grid grid-cols-1 place-content-center md:grid-cols-3 gap-5 my-10">
                <BlogsCard headlines={data[0].headlines} img={data[0].img} description={data[0].description}/>
                <BlogsCard headlines={data[1].headlines} img={data[1].img} description={data[1].description}/>
                <BlogsCard headlines={data[2].headlines} img={data[2].img} description={data[2].description}/>
                <BlogsCard headlines={data[3].headlines} img={data[3].img} description={data[3].description}/>
                <BlogsCard headlines={data[4].headlines} img={data[4].img} description={data[4].description}/>
                <BlogsCard headlines={data[5].headlines} img={data[5].img} description={data[5].description}/>
               
            </div>
        </div>
  
    </div>
  )
}

export default Blogs