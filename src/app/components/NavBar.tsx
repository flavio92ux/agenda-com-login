import Image from 'next/image'
import { headers } from 'next/headers'

import calendario from '@/assets/img/calendario.png'

interface IUser {
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: boolean
  sub: string
  sid: string
}

export default async function NavBar({ user }) {
  const headersList = headers()

  const fullUrl = headersList.get('referer')

  let namePage

  if (fullUrl) {
    const splittedUrl = fullUrl.split('/')
    namePage = splittedUrl[splittedUrl.length - 1]
  }

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href='#' className='flex items-center py-4 px-2'>
                <Image
                  src={calendario}
                  width={32}
                  height={32}
                  alt='calendário'
                  className='h-8 w-8 mr-2'
                />
                <span className='font-semibold text-gray-500 text-lg'>
                  Agenda
                </span>
              </a>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              <a
                href='/dashboard'
                className={`py-4 px-2 font-semibold ${
                  namePage === 'dashboard'
                    ? 'text-green-500 border-b-4 border-green-500'
                    : 'text-gray-500 hover:text-green-500 transition duration-300'
                }`}
              >
                Home
              </a>
              <a
                href='/services'
								className={`py-4 px-2 font-semibold ${
                  namePage === 'services'
                    ? 'text-green-500 border-b-4 border-green-500'
                    : 'text-gray-500 hover:text-green-500 transition duration-300'
                }`}
              >
                Services
              </a>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-3 '>
            <div className='flex flex-row items-center'>
              <Image
                src={user.picture}
                width={32}
                height={32}
                alt='calendário'
                className='h-8 w-8 mr-2 rounded-full'
              />

              <div className='border-r border-gray-200 mx-3 my-[14px]'>
                <p className='font-semibold mr-3'>{user.nickname}</p>
              </div>
            </div>
            <a
              href='/api/auth/logout'
              className='py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300'
            >
              Sair
            </a>
          </div>

          <div className='md:hidden flex items-center'>
            <button className='outline-none mobile-menu-button'>
              <svg
                className=' w-6 h-6 text-gray-500 hover:text-green-500 '
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='hidden mobile-menu'>
        <ul className=''>
          <li className='active'>
            <a
              href='index.html'
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
