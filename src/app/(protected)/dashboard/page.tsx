import { getSession } from '@auth0/nextjs-auth0'

export default async function Dashboard() {
  const { user }: any = await getSession()

  return (
    <>
      <h1>Bem vindo, {user.nickname}</h1>
      <div>
        <a href='/api/auth/logout'>Fazer logoff</a>
      </div>
    </>
  )
}
