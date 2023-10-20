'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

export default function Login({}: Props) {
  const {data, status} = useSession()
  console.log(data, status);
  
  
  return (
    <div className='flex flex-col'>
      <button onClick={signOut}>logout</button>
      <button onClick={()=>signIn('google')}>Login with google</button>
    </div>
  )
}