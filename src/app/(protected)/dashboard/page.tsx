import PrincipalPanel from '@/app/components/PrincipalPanel'

export default async function Dashboard() {
  const people = [
    { name: 'Lindsay Walton', address: 'Front-end Developer', phone: 'lindsay.walton@example.com'},
    { name: 'Lindsay Walton', address: 'Front-end Developer', phone: 'lindsay.walton@example.com'},
    { name: 'Lindsay Walton', address: 'Front-end Developer', phone: 'lindsay.walton@example.com'},
    { name: 'Lindsay Walton', address: 'Front-end Developer', phone: 'lindsay.walton@example.com'},
  ]

  return (
    <>
      <PrincipalPanel people={people} />
    </>
    
  )
}
