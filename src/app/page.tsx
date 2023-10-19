import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Index() {
  const session = await getSession()

  if (session) {
    redirect('/dashboard')
  }

  return <a href='/api/auth/login'>Log In</a>
}
