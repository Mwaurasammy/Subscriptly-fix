import React from 'react'
import TableRow from "./TableRow"
import "./Table.css"

//Table header and map each subcription row.
function Table( {subscriptions,handleDelete, onUpdate} ) {

  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Cost</th>
                <th>Billing Cycle</th>
                <th>Date of Payment</th>
                <th>Days Left</th>
                <th>Status</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            {subscriptions.map(subscription => (
                <TableRow key={subscription.id} subscription={subscription} handleDelete={handleDelete} onUpdate={onUpdate}/>
            ))}
        </tbody>
    </table>
  )
}

export default Table