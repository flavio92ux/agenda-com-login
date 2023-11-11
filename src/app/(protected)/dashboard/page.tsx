import PrincipalPanel from '@/app/components/PrincipalPanel'

async function getData() {
  const res = await fetch('http://localhost:5108/api/Customer', {
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

export default async function Dashboard() {
  const people = await getData()

  console.log(people)

  // const people = [
  //   {
  //     name: 'João',
  //     address: 'Rua Principal, 123',
  //     phone: '555-1234',
  //   },
  //   {
  //     name: 'Maria',
  //     address: 'Avenida Secundária, 456',
  //     phone: '555-5678',
  //   },
  //   {
  //     name: 'Carlos',
  //     address: 'Travessa da Esquina, 789',
  //     phone: '555-9876',
  //   },
  //   {
  //     name: 'Ana',
  //     address: 'Praça Central, 321',
  //     phone: '555-4321',
  //   },
  // ]

  return (
    <>
      <PrincipalPanel people={people} />
    </>
  )
}
