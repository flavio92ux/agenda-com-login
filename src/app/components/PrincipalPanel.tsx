'use client'
import { useState } from 'react'
import Modal from './NewCustomerModal'
import ConfirmationModal from './ConfirmationModal'
import { TrashIcon } from '@heroicons/react/24/outline'

interface IPeople {
  id: string
  name: string
  phoneNumber: string
  address: string
  city: string
  neighborhood: string
  number: string
}

interface IPrincipalPanel {
  people: IPeople[]
}

export default function PrincipalPanel({ people }: IPrincipalPanel) {
  const [open, setOpen] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [key, setKey] = useState(null)

  function handleDelete(key) {
    setKey(key)
    setShowConfirmation(true)
  }

  function handleAddCustomer() {
    setKey(null)
    setOpen(true)
  }

  function handleEdit(key) {
    setOpen(true)
    setKey(key)
  }

  return (
    <>
      {open && <Modal open={open} setOpen={setOpen} people={people} chave={key} />}
      {showConfirmation && <ConfirmationModal open={showConfirmation} setOpen={setShowConfirmation} people={people} chave={key} />}
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              Lista de clientes
            </h1>
          </div>
          <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
            <button
              type='button'
              onClick={() => handleAddCustomer()}
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Adicionar usuário
            </button>
          </div>
        </div>
        <div className='mt-8 flow-root'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                      >
                        Nome
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Endereço
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Telefone
                      </th>
                      <th
                        scope='col'
                        className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                      >
                        <span className='sr-only'>Edit</span>
                      </th>
                      <th
                        scope='col'
                        className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                      >
                        <span className='sr-only'>Trash</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {people.map((person, key) => (
                      <tr key={key}>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {person.name}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {person.address}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {person.phoneNumber}
                        </td>
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <button onClick={() => handleEdit(key)} className='text-indigo-600 hover:text-indigo-900'>
                            Editar
                          </button>
                        </td>
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <button onClick={() => handleDelete(key)}>
                            <TrashIcon className='w-5 h-5' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
