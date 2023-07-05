import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 sm:mt-10'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-15'>
                As a newly graduated student from General Assembly's coding bootcamp and former chef, I bring a unique blend of creativity, technical skills and attention to detail to the world of programming. With my background in hospitality I have developed fantastic communication skills and have grown accustomed to working well under pressure. I bring a fresh approach to coding challenges, combining precision and innovation to create elegant solutions. Through my training at General Assembly, I have honed my ability to develop robust and efficient code while embracing collaborative problem-solving. I am eager to apply my diverse skill set to create seamless and engaging user experiences that leave a lasting impact.
            </p>

        </div>

    </div>
  )
}
