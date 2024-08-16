import React from 'react'
import "./Filter.css"

//Function to Select category to filter. 
const Filter = ({selectedCategory, onCategoryChange}) => {
  return (
    <div className="filtering">
        <label htmlFor="category">Filter By Category:</label>
        <select 
            id="category"
            value={selectedCategory}
            onChange={onCategoryChange}
        >
            <option value="">All</option>
            <option value="streaming">Streaming</option>
            <option value="music">Music</option>
            <option value="software">Software</option>
            <option value="shopping">Shopping</option>
            <option value="gaming">Gaming</option>
            <option value="education">Education</option>
            <option value="cloud storage">Cloud Storage</option>
            <option value="other">Other</option>
        </select>
    </div>
  )
}

export default Filter