import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";

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
          {children}
        </body>
    </html>
  )
}
