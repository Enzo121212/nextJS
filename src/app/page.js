import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
     <Link href="/">Home</Link> <br/>
     <Link href="/contact">Contact</Link><br/>
     <Link href="/cv">cv</Link><br/>
     <Link href="/jeux">JEux</Link><br/>
     <Link href="/apiTest">Test API</Link><br/>
     <Link href="/person">Person</Link><br/>
    </main>
  )
}
