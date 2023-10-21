'use client'

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Typography } from '@material-tailwind/react'
import { IMaskInput } from 'react-imask'

export default function AddCustomerModal(props) {
  const { open, setOpen } = props

  const cancelButtonRef = useRef(null)

  const mask = [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-base font-semibold leading-6 text-gray-900'
                      >
                        Adicionar cliente
                      </Dialog.Title>
                      <div className='mt-2'>
                        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                          <div className='mb-1 flex flex-col gap-6'>
                            <Typography
                              variant='h6'
                              color='blue-gray'
                              className='-mb-3'
                            >
                              Nome
                            </Typography>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='username'
                              type='text'
                              placeholder='Nome'
                            />
                            <Typography
                              variant='h6'
                              color='blue-gray'
                              className='-mb-3'
                            >
                              Endereço
                            </Typography>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='username'
                              type='text'
                              placeholder='Rua Um'
                            />
  
                            <Typography
                              variant='h6'
                              color='blue-gray'
                              className='-mb-3'
                            >
                              Telefone
                            </Typography>

                            <IMaskInput
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              mask={mask}
                              name="phone"
                              placeholder="Enter phone number here"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                    onClick={() => setOpen(false)}
                  >
                    Adicionar
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
