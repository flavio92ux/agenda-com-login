import { UserProvider } from '@auth0/nextjs-auth0/client'

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
