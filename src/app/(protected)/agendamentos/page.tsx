import AgendamentoPanel from '@/app/components/AgendamentoPanel'

async function getAppointment() {
  const res = await fetch(`${process.env.BACK_END_BASE_URL}/api/Appointment`, {
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
    const customerAssociate = customers.find((j) => j.id === item.customerId)

    item.name = customerAssociate.name

    return item
  })

  return <AgendamentoPanel agendamentos={agendamentos} />
}