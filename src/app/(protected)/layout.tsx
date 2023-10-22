import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation"

import NavBar from '@/app/components/NavBar'

interface IProp {
  children: React.ReactNode
}

export const metadata = {
  title: 'App de agenda',
  description: 'Lista de clientes',
}

export default async function AdminLayout({ children }: IProp) {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <html lang='en'>
        <body>
          <NavBar user={session.user} />
          <div className='mb-4' />
          {children}
        </body>
    </html>
  )
}
