import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-auto'>
            <div className='pb-8 sm:mt-15'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Fill in the form below to get in touch with me.</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/707ef0c4-66b9-4edf-92b2-82b19a398fe4" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input
                    type="text" 
                    name='name'
                    placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input
                    type="text" 
                    name='email'
                    placeholder='Enter your email'
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea name="message" rows="10" placeholder='Enter your message...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-green-500 hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
