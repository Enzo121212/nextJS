"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname , useRouter } from 'next/navigation'

const page = () => {
  const path = usePathname()
  const router = useRouter()
  return (
    <div>
      <h1> CONTACT</h1>
      <p>Please me, contanct me with tyou</p>
      {/* <Link href="#" className=``>Exemple</Link> */}
      <button onClick={()=>router.push('/jeux')}> JEUX</button>
    </div>
  )
}

export default page
