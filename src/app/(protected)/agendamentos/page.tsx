import AgendamentoPanel from '@/app/components/AgendamentoPanel'

async function getData() {
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

export default async function Agendamentos() {
  const agendamentos = await getData()

  return <AgendamentoPanel agendamentos={agendamentos} />
}