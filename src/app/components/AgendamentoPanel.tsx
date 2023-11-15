'use client'
import React, { useState } from 'react'
import AgendamentoModal from '@/app/components/AgendamentoModal'

interface IAgendamento {
  id: string
  dateTime: string
  dateParsed: string
  message: string
  customerId: string
  name: string
}

interface ICustomers {
  id: string,
  name: string,
  phoneNumber: string,
  address: string,
  city: string,
  neighborhood: string,
  number: string
}

interface IProps {
  agendamentos: IAgendamento[]
  customers: ICustomers[]
  baseUrl: string
}

export default function AgendamentoPanel({ agendamentos, customers, baseUrl }: IProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <AgendamentoModal open={open} setOpen={setOpen} agendamentos={agendamentos} customers={customers} baseUrl={baseUrl} />}
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              Agendamentos
            </h1>
          </div>
          <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
            <button
              type='button'
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={() => setOpen(true)}
            >
              Novo Agendamento
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
                        Mensagem
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Data de envio
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {agendamentos.map((agendamento, key) => (
                      <tr key={key}>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {agendamento.name}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {agendamento.message}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {agendamento.dateParsed}
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
