import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 w-2/4 text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint perspiciatis magni eum facere. Distinctio esse, quo corporis error nobis sunt architecto aut molestias iure?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quia voluptatum! Perspiciatis dicta doloremque blanditiis, quo nobis a dolorum! Harum dolore assumenda expedita, pariatur ullam accusamus asperiores officiis! Mollitia quisquam at natus est minus.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas corporis cupiditate minima cum ducimus natus consequuntur autem qui amet ut!
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span  className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quaerat.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, amet!</p>
        </div>
      </div>
    </div>
  )
}

export default About