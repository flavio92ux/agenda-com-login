'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IMaskInput } from 'react-imask'

export default function AddCustomerModal(props) {
  const { open, setOpen, people, chave, baseUrl } = props

  const [data, setData] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    address: '',
    city: '',
    neighborhood: '',
    number: '',
  })

  useEffect(() => {
    if (typeof chave === 'number') {
      setData(people[chave])
    }
  }, [chave, people])

  async function editCustomer() {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  
    const res = await fetch(`${baseUrl}/api/Customer/${data.id}`, requestOptions)

    return res
  }

  async function addCustomer() {
    if (!data.number) {
      data.number = 's/n'
    }
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  
    const res = await fetch(`${baseUrl}/api/Customer`, requestOptions)

    return res
  }

  async function handleSubmit() {
    if (typeof chave === 'number') {
      const res = await editCustomer()

      if (res.ok) {
        people[chave] = data
      } else {
        window.alert('Erro')
      }
    } else {
      const res = await addCustomer()

      if (res.ok) {
        people.push(data)
      } else {
        window.alert('Erro')
      }
    }
    setOpen(false)
  }

  const cancelButtonRef = useRef(null)

  const mask = [{ mask: '(00) 00000-0000' }, { mask: '(00) 00000-0000' }]

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
                        {typeof chave === 'number'
                          ? 'Editar dados do usuário'
                          : 'Adicionar usuário'}
                      </Dialog.Title>
                      <div className='mt-2'>
                        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                          <div className='mb-1 flex flex-col gap-6'>
                            <label className='flex -mb-3' htmlFor='username'>
                              Nome
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                              }
                              value={data.name}
                              id='username'
                              type='text'
                              placeholder='Digite seu nome'
                            />

                            <label className='flex -mb-3' htmlFor='address'>
                              Rua
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                              }
                              value={data.address}
                              id='address'
                              type='text'
                              placeholder='Rua Um'
                            />

                            <label className='flex -mb-3' htmlFor='number'>
                              Número residência
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({ ...data, number: e.target.value })
                              }
                              value={data.number}
                              id='number'
                              type='text'
                              placeholder='Digite seu nome'
                            />

                            <label
                              className='flex -mb-3'
                              htmlFor='neighborhood'
                            >
                              Bairro
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  neighborhood: e.target.value,
                                })
                              }
                              value={data.neighborhood}
                              id='neighborhood'
                              type='text'
                              placeholder='Digite seu nome'
                            />

                            <label
                              className='flex -mb-3'
                              htmlFor='city'
                            >
                              Cidade
                            </label>
                            <input
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  city: e.target.value,
                                })
                              }
                              value={data.city}
                              id='city'
                              type='text'
                              placeholder='Digite seu nome'
                            />

                            <label className='flex -mb-3' htmlFor='phone'>
                              Telefone
                            </label>
                            <IMaskInput
                              className='shadow h-[50px] focus:border-gray-900 rounded-xl appearance-none border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              onChange={(e: any) =>
                                setData({
                                  ...data,
                                  phoneNumber: e.target.value,
                                })
                              }
                              value={data.phoneNumber}
                              mask={mask}
                              name='phone'
                              placeholder='(31) 99999-9999'
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
                    disabled={
                      data.name.length < 3 ||
                      data.address.length < 3 ||
                      data.city.length < 3 ||
                      data.neighborhood.length < 2 ||
                      data.phoneNumber.length !== 15
                    }
                    className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                      data.name.length < 3 ||
                      data.address.length < 3 ||
                      data.city.length < 3 ||
                      data.neighborhood.length < 2 ||
                      data.phoneNumber.length !== 15
                        ? 'bg-gray-300'
                        : 'hover:bg-red-500 bg-red-600'
                    }`}
                    onClick={handleSubmit}
                  >
                    {typeof chave === 'number' ? 'Editar' : 'Adicionar'}
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
