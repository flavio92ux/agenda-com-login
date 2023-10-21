import PrincipalPanel from '@/app/components/PrincipalPanel'

export default async function Dashboard() {
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Guilherme Bao',  title: 'Front-end Developer', email: 'lindsay.walton@example2.com', role: 'Member' },
    { name: 'Professor Wilson', title: 'Front-end Developer', email: 'lindsay.walton@example3.com', role: 'Member' },
    { name: 'Raduque Jeremias', title: 'Front-end Developer', email: 'lindsay.walton@example4.com', role: 'Member' },
  ]

  return (
    <PrincipalPanel people={people} />
  )
}
