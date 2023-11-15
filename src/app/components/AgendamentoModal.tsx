'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { format } from 'date-fns'

export default function AddCustomerModal(props) {
  const { open, setOpen, customers, baseUrl } = props

  function addMessage() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${baseUrl}/api/Appointment`, requestOptions)
  }

  const [data, setData] = useState({
    customerId: '',
    message: '',
    dateTime: ''
  })

  const cancelButtonRef = useRef(null)

  function handleSubmit() {
    const date = new Date()
    const dateTime = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS")

    const newData = data

    newData.dateTime = dateTime

    setData(newData)

    console.log(data)

    // addMessage()
  }

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
          <div className='flex lg:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden mt-12 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-2xl font-semibold leading-6 text-gray-900'
                      >
                        Adicionar Mensagem
                      </Dialog.Title>
                      <div className='mt-2'>
                        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                          <div className='mb-1 flex flex-col gap-6'>
                            <label className='flex -mb-3' htmlFor='username'>
                              Nome
                            </label>
                            <select
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='select'
                              onChange={(e) =>
                                setData({ ...data, customerId: e.target.value })
                              }
                              defaultValue=''
                              id='username'
                            >
                              <option value='' disabled>
                                Selectione uma opção
                              </option>
                              {customers.map((customer, key) => (
                                <option key={key} value={customer.id}>
                                  {customer.name}
                                </option>
                              ))}
                            </select>

                            <label className='flex -mb-3' htmlFor='address'>
                              Menssagem
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({ ...data, message: e.target.value })
                              }
                              value={data.message}
                              id='address'
                              type='text'
                              placeholder='Rua Um'
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
                    disabled={!data.customerId || data.message.length < 3}
                    className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                      data.customerId.length < 3 || data.message.length < 3
                        ? 'bg-gray-300'
                        : 'hover:bg-red-500 bg-red-600'
                    }`}
                    onClick={handleSubmit}
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
