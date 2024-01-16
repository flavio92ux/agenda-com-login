import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'
import Head from 'next/head';

export default async function Index() {
  const session = await getSession()

  if (session) {
    redirect('/dashboard') //
  }

  redirect('/api/auth/login')
}
