import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets!</small></p>
                </div>
            </nav>


            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}
