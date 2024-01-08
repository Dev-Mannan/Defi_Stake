
import Link from "next/link"

export default function SignUp() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center font-bold p-24">
            <h1>I am SignUp</h1>
            <br/>
            <h3><Link href='/login' className="flex h-max justify-center">Link to login</Link></h3>
        </main>
    )
}