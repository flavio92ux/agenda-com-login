import PrincipalPanel from '@/app/components/PrincipalPanel'

async function getData() {
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

export default async function Dashboard() {
  const people = await getData()

  const baseUrl = process.env.BACK_END_BASE_URL

  return (
    <>
      <PrincipalPanel people={people} baseUrl={baseUrl} />
    </>
  )
}
