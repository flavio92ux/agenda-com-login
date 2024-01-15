import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import NavBar from '@/app/components/NavBar'

import Head from 'next/head'

interface IProp {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: IProp) {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <html lang='en'>
      <head>
        <title>App de agenda</title>
        <meta name='description' content='App de agendamento de tarefas' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <NavBar user={session.user} />
        <div className='mb-4' />
        {children}
      </body>
    </html>
  )
}
