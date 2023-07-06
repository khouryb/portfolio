import React from 'react'

export const Interests = () => {

    const hobbies = [
        {
            id: 1,
            name: 'Health and Fitness',
            description: 'I am interested in bodybuilding and fitness. It helps keep me sane after staring at a screen all day!'
        },
        {
            id: 2,
            name: 'Language Learning',
            description: 'I have a passion for learning new languages, having learned Spanish over lock down and also practising at work with colleagues. I find it gives me a new perspective and the ability to connect with different cultures.'
        },
        {
            id: 3,
            name: 'Cooking',
            description: 'Pretty basic I know, but I love a good butter chicken!'
        },
    ]

    return (
        <div
          name="interests"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Interests
              </p>
            </div>
    
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {hobbies.map(({ id, name, description }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <h3 className='text-xl font-bold text-center'>{name}</h3>
                    <p className='p-4'>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
