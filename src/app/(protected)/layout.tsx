import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";
import { headers } from 'next/headers'
import NavBar from '@/app/components/NavBar'

interface IProp {
  children: React.ReactNode
}

interface IUser {
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: boolean
  sub: string
  sid: string
}

const headersList = headers()

const fullUrl = headersList.get('referer')

let namePage

if (fullUrl) {
  const splittedUrl = fullUrl.split('/')
  namePage = splittedUrl[splittedUrl.length - 1]
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
