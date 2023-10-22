'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import calendario from '@/assets/img/calendario.png'
import userIcon from '@/assets/img/user.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function toogleMenu() {
  const menu = document.querySelector('.mobile-menu')

  menu.classList.toggle('hidden')
}

export default function NavBar({ user }) {
  const pathname = usePathname()

  const [picture, setPicture] = useState(userIcon)

  useEffect(() => {
    fetch(user.picture).then((res) => {
      if (res.ok === true) {
        setPicture(user.picture)
      }
    })
  }, [user.picture])

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <Link href='/dashboard' className='flex items-center py-4 px-2'>
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
              </Link>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              <Link
                href='/dashboard'
                className={`py-4 px-2 font-semibold ${
                  pathname === '/dashboard'
                    ? 'text-green-500 border-b-4 border-green-500'
                    : 'text-gray-500 hover:text-green-500 transition duration-300'
                }`}
              >
                Home
              </Link>
              <Link
                href='/agendamentos'
                className={`py-4 px-2 font-semibold ${
                  pathname === '/agendamentos'
                    ? 'text-green-500 border-b-4 border-green-500'
                    : 'text-gray-500 hover:text-green-500 transition duration-300'
                }`}
              >
                Agendamentos
              </Link>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-3 '>
            <div className='flex flex-row items-center'>
              <Image
                src={picture}
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

          <div onClick={toogleMenu} className='md:hidden flex items-center'>
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

      <div className='hidden absolute mobile-menu bg-green-200 w-full'>
        <ul className=''>
          <li>
            <a
              href='/dashboard'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/agendamentos'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold'
            >
              Agendamentos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
