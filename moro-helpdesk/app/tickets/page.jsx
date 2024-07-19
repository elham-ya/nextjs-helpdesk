import React from 'react'
import TicketList from './TicketList'

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets!</small></p>
                </div>
            </nav>
            <TicketList />
        </main>
    )
}
