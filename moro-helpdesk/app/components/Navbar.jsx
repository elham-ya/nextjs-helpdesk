import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "./moro-logo.png"

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Moro helpdesk icon"
                width={70}
                quality={100}
                placeholder='blur'
            />
            <h1>moro helpdesk</h1>
            <Link href="/">Home page</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
