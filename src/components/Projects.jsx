import React from 'react'
import noughts from '../assets/portfolio/noughts-and-crosses.png'
import movie from '../assets/portfolio/movie-list.png'
import divorce from '../assets/portfolio/divorce.png'

export const Projects = () => {

    const portfolio = [
        {
            id: 1,
            src: noughts,
            repo: 'https://github.com/khouryb/naughts-and-crosses',
            live: 'https://khouryb.github.io/naughts-and-crosses/'
        },
        {
            id: 2,
            src: movie,
            repo: 'https://github.com/khouryb/movie-list',
            live: 'https://khouryb.github.io/movie-list/'
        },
        {
            id: 3,
            src: divorce,
            repo: 'https://github.com/hpramanathan/project3-mernstack-app',
            live: 'https://hpramanathan.github.io/project3-mernstack-app/'
        },
    ]

    return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolio.map(({ id, src, live, repo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
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
              ))}
            </div>
          </div>
        </div>
      );
}
