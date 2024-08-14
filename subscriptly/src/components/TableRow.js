import React from 'react'
import {differenceInDays, addDays, addMonths, addWeeks} from 'date-fns'
import "../components/TableRow.css"
function TableRow({ subscription,handleDelete }) {
    function calculateDaysLeft(dateOfPayment, billingCycle) {
        const paymentDate = new Date(dateOfPayment)
        let nextBillingDate;
    
        switch (billingCycle) {
            case 'monthly':
                nextBillingDate = addMonths(paymentDate, 1);
                break;
            case 'yearly':
                nextBillingDate = addMonths(paymentDate, 12);
                break;
            case 'weekly':
                nextBillingDate = addWeeks(paymentDate, 1);
                break;
            default:
                return 'Invalid billing cycle'
        }
        const today = new Date();
        const daysLeft = differenceInDays(nextBillingDate, today)
    
        return daysLeft >= 0 ? daysLeft : 0;
    }
    const daysLeft = calculateDaysLeft(subscription.date_of_payment, subscription.billing_cycle)
    const status = daysLeft > 0 ? 'Active' : 'Inactive'
    const statusStyle = {
        color: status === 'Active' ? 'green' : 'red'
    }
  return (
    <tr>
        <td>{subscription.name}</td>
        <td>{subscription.category}</td>
        <td>{subscription.cost}</td>
        <td>{subscription.billing_cycle}</td>
        <td>{subscription.date_of_payment}</td>
        <td>{daysLeft}</td>
        <td style={statusStyle}>{status}</td>
        <td><button className='delete-btn' onClick={()=>handleDelete(subscription.id)}>cancel</button></td>
    
    </tr>
  )
}

export default TableRow;