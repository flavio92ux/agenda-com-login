'use client'
import { useState } from "react"
import Modal from "./NewCustomerModal"

interface IPeople {
  name: string
  title: string
  email: string
  role: string
}

interface IPrincipalPanel {
  people: IPeople[]
}

export default function PrincipalPanel({ people }: IPrincipalPanel) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <Modal open={open} setOpen={setOpen} />}
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
              onClick={() => setOpen(true)}
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
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {person.name}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {person.title}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {person.email}
                        </td>
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <a
                            href='#'
                            className='text-indigo-600 hover:text-indigo-900'
                          >
                            Editar
                          </a>
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
