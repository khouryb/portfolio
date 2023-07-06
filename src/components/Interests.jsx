import React from 'react'

export const Interests = () => {
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
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {/* {portfolio.map(({ id, src, live, repo, description }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <p>{description}</p>
                  <img
                    src={src}
                    alt=""
                    className="mt-1 rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                    href={`${live}`}
                    target='_blank'
                    rel='noreferrer'
                    >
                      Demo
                    </a>
                    <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                    href={`${repo}`}
                    target='_blank'
                    rel='noreferrer'
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      );
}