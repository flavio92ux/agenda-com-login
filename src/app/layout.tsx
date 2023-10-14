import { UserProvider } from '@auth0/nextjs-auth0/client'
import Teste from './components/Teste'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <UserProvider>
        <body>{children}</body>
        <Teste />
      </UserProvider>
    </html>
  )
}
