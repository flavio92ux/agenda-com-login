import PrincipalPanel from '@/app/components/PrincipalPanel'
import { getSession } from '@auth0/nextjs-auth0'

export default async function Dashboard() {
  const { user }: any = await getSession()
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Guilherme Bao',  title: 'Front-end Developer', email: 'lindsay.walton@example2.com', role: 'Member' },
    { name: 'Professor Wilson', title: 'Front-end Developer', email: 'lindsay.walton@example3.com', role: 'Member' },
    { name: 'Raduque Jeremias', title: 'Front-end Developer', email: 'lindsay.walton@example4.com', role: 'Member' },
    // More people...
  ]

  return (
    <PrincipalPanel people={people} />
  )
}
