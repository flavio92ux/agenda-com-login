'use  client';
'use client'

import React from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Teste() {
  const { user, isLoading } = useUser();

  return (
      <>
          {user && <div><a href='/api/auth/logout'>Fazer logoff</a></div>}
          {!isLoading && !user && <div><a href="/api/auth/login">Log In</a></div>}
      </>
  );
};

