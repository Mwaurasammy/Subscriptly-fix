import React from 'react'
import "./PaymentDateFilter.css"
const PaymentDateFilter = ({startDate, endDate, onStartDateChange, onEndDateChange}) => {
  return (
    <div className="dateFilter">
        <label>
            Start Date:
            <input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
            />
        </label>
        <label>
            End Date:
            <input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
            />
        </label>
    </div>
  )
}

export default PaymentDateFilter