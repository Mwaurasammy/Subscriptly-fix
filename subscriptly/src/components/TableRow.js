import React from 'react'
import EditableCell from "./EditableCell"
import {differenceInDays, addMonths, addWeeks} from 'date-fns'
import "../components/TableRow.css"

//Create table rows
function TableRow({ subscription,handleDelete, onUpdate}) {
    //Function to calculate days left for a subscription to expire
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
    //Initialize days left and activity status of a subscription. To be added to the table row.
    const daysLeft = calculateDaysLeft(subscription.date_of_payment, subscription.billing_cycle)
    const status = daysLeft > 0 ? 'Active' : 'Inactive'
    const statusStyle = {
        color: status === 'Active' ? 'green' : 'red'
    }
    //Function to save the cell details after editing
    const handleSave = (field, newValue) => {
        const updatedSubscription = {...subscription, [field]: newValue}
        onUpdate(subscription.id, updatedSubscription)
    }
  return (
    <tr>
        <EditableCell value={subscription.name} onSave={(newValue) => handleSave('name', newValue)}/>
        <EditableCell value={subscription.category} onSave={(newValue) => handleSave('category', newValue)}/>
        <EditableCell value={subscription.cost} onSave={(newValue) => handleSave('cost', newValue)}/>
        <EditableCell value={subscription.billing_cycle} onSave={(newValue) => handleSave('billing_cycle', newValue)}/>
        <EditableCell value={subscription.date_of_payment} onSave={(newValue) => handleSave('date_of_payment', newValue)}/>
        <td>{daysLeft}</td>
        <td style={statusStyle}>{status}</td>
        <td><button className='delete-btn' onClick={()=>handleDelete(subscription.id)}>cancel</button></td>
    </tr>
  )
}

export default TableRow;