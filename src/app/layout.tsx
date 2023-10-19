import { UserProvider } from '@auth0/nextjs-auth0/client'
import './globals.css'

interface IChildren {
  children: React.ReactNode
}

export default async function RootLayout({ children }: IChildren) {
  return (
    <html lang='en'>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
