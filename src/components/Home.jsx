import React from 'react';
import HeroImage from '../assets/Me.jpg';
import {HiArrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hi. I'm a Full Stack Developer.
                </h2>
                <p className='text-gray-500 py-4'>
                Creating seamless and engaging user experiences that leave a lasting impact. I have experience with technologies like: React, Express.js, MongoDB, Tailwind PostgreSQL and more.
                </p>

                <div>
                    <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight className='ml-2' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="hero profile"
                className='rounded-2xl mx-auto w-2/3 md:w-1/2' />
            </div>
        </div>
    </div>
  )
}
