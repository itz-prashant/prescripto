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
    </div>
  )
}

export default About