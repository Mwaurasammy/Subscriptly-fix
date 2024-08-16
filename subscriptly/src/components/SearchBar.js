import React from 'react'
import "./SearchBar.css"

//Search by subscription name.
function SearchBar({setSearchTerm}) {

    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
        
    }
  return (
    <div className='input-div'>
        <input onChange={handleChange} type='text' placeholder='search name of subscription'></input>
    </div>
  )

}

export default SearchBar