import React from 'react'

export const Search = () => {
  return (
    <div className='searchContainer'>
            <div className='search'>
            <span class="searchIcon material-symbols-outlined">search</span>
            <input type="text" id='searchInput' placeholder='Search' className='searchText'/>
            </div>
            <div className='btnMain'>
                <button className='btn' id='button'>Find!</button>
            </div>
        </div>
  )
}
