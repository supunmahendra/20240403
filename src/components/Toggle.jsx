import React from 'react'

export const Toggle = ({id,checked,onSelectCatagory},) => {
  return (
    
    <div className='toggleContainer'>
        <input type="checkbox" id={id} className='checkbocInput' checked={checked} onChange={(a)=>onSelectCatagory(a.target.checked)}/>
        <label htmlFor={id} className='buttonToggle'></label> 
    </div>

  )
}
