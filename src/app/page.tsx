'use client'

import React from 'react'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function Index() {
  const { user, isLoading } = useUser()
  return (
    <>
      <h1>Logue na aplicação para ter acesso aos conteúdos</h1>

      {!isLoading && !user && (
        <div>
          <a href='/api/auth/login'>Log In</a>
        </div>
      )}
    </>
  )
}
