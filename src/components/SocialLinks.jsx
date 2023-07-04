import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsDownload, BsFillPersonLinesFill } from 'react-icons/bs'

export const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/khourybenjamin/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/khouryb'
        },
        {
            id: 3,
            child: (
                <>
                Mail <AiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:khourybenjamin@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map((link) => (
                <li key={link.id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a
                    href={`${link.href}`}
                    className='flex justify-between items-center w-full text-white'
                    download={link.download}
                    target='_blank'
                    rel='noreferrer'
                    >
                        {link.child}
                    </a>
                </li>
            ))}


        </ul>
    </div>
  )
}
