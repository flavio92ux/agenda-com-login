import AgendamentoPanel from '@/app/components/AgendamentoPanel'
import { format, parseISO } from 'date-fns';

async function getAppointment() {
  const res = await fetch(`${process.env.BACK_END_BASE_URL}/api/Appointment`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }) // teste

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getAllCustomers() {
  const res = await fetch(`${process.env.BACK_END_BASE_URL}/api/Customer`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Agendamentos() {
  const agendamentos = await getAppointment()
  const customers = await getAllCustomers()

  agendamentos.forEach((item) => {
    if (item && item.customerId) {
      const customerAssociate = customers.find((j) => j.id === item.customerId)

      item.dateParsed = format(parseISO(item.dateTime), "dd/MM/yyyy HH:mm:ss");
      item.name = customerAssociate.name
    }
  })

  const baseUrl = process.env.BACK_END_BASE_URL

  return <AgendamentoPanel agendamentos={agendamentos} customers={customers} baseUrl={baseUrl} />
}