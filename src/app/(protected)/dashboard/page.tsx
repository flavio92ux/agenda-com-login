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

  return (
    <>
      <PrincipalPanel people={people} />
    </>
  )
}
