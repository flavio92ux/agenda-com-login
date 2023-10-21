import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";
import NavBar from '@/app/components/NavBar';

interface IChildren {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: IChildren) {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <html lang='en'>
        <body>
          <NavBar />
          <div className='mb-4' />
          {children}
        </body>
    </html>
  )
}
