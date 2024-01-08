import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-bold p-24">
      <h1>Hello</h1>
      <br/>
      <h1><Link href='/login' className="flex h-max justify-center">Link to login</Link></h1>
    </main>
  )
}
