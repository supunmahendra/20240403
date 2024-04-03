import React from 'react'

export const Search = () => {
  return (
    <div className='searchMain'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        
        <div className='toggle'>
            
            <div>
            <div className='toggleContainer'>
            <input type="checkbox" id='toggleInput' className='checkbocInput' />
            <label htmlFor='toggleInput' className='buttonToggle'></label>
            </div>
            </div>
            <div className='selectSearch'id='selectCatagory'>Now find recipies</div>
        </div>
        
        <div className='searchContainer'>
            <div className='search'>
            <span class="searchIcon material-symbols-outlined">search</span>
            <input type="text" id='searchInput' placeholder='Search' className='searchText'/>
            </div>
            <div className='btnMain'>
                <button className='btn' id='button'>Find!</button>

            </div>
        </div>

    </div>
  )
}
