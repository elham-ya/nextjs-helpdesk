import Link from "next/link"

export default function notFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">We hit a break wall.</h2>
            <p>We could not find the page you were looking for!</p>
            <p>Go Back to All <Link href="/tickets">Tickets</Link>.</p>
        </main>
    )
}