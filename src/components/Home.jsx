import React, { useEffect } from 'react'
import { useState } from 'react';
import { Toggle } from './Toggle';
import { FetchMenu } from './FetchMenu';
import { WriteList } from './WriteList';
import { WriteOneMenue } from './WriteOneMenue'
import { Rfetch } from './Rfetch';


export const Home = () => {  
  
  const [isToggled,setIsToggled] = useState(false);
  const [searchedText,SetSearchText] = useState("Chicken");
  const [oneSelectMeal, setOneSelectMeal] =useState ([]);
  const [A, setA] =useState (0);
  console.log(A)
  
 

  const [selectMeal,error] = FetchMenu(isToggled,searchedText)

  console.log(selectMeal)
  console.log(error)



  const Random=()=>{
    setA(3)
   
   }
  
 const Back=()=>{
  setA(0)
 }

 const inputValue = () =>{
  setA(0)
    const text =document.getElementById("searchInput").value
    SetSearchText(text)
    console.log(text)
  }

  const onSelectCatagory = (value)=>{
    setIsToggled(value)
    inputValue()
};

const onSelectMeal = (value)=>{

  if(selectMeal.meals){
    const filterdMenu = selectMeal.meals.filter((menu)=>(menu.strMeal === value))
    
    setOneSelectMeal(filterdMenu)
    setA(1)
    console.log(oneSelectMeal)

  } else if(selectMeal.drinks){
    const filterdMenu = selectMeal.drinks.filter((menu)=>(menu.strDrink === value))
    
    setOneSelectMeal(filterdMenu)
    setA(2)
    console.log(oneSelectMeal)
  }
}

//margarita
//Lamb

 


  return (


    <div>
          <div className='searchMain'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <div className='toggle'>
            
            <Toggle id="toggleInput" checked={this} onSelectCatagory={onSelectCatagory}></Toggle>
                       
            <div className='selectSearch'id='selectCatagory' >
              {(isToggled) ? <div>Cocktail Recipes</div>:<div>Meal Recipes </div>}
            </div>

            <div className='btnMain'>
                <button className='btn' id='button' onClick={Back}>Back</button>
            </div>

            <div className='btnMain'>
                <button className='btn' id='button' onClick={Random}>Random</button>
            </div>
            
        </div>
        
        <div className='searchContainer'>
            <div className='search'>
            <span class="searchIcon material-symbols-outlined">search</span>
            <input type="text" id='searchInput' placeholder='Search' className='searchText'/>
            </div>
            <div className='btnMain'>
                <button className='btn' id='button' onClick={inputValue}>Find!</button>
            </div>
          </div>
          </div>

          <div>

          <WriteList selectMeal={selectMeal} onSelectMeal ={onSelectMeal} A={A}></WriteList>
          <WriteOneMenue oneselectMeal={oneSelectMeal} A={A}></WriteOneMenue>
          </div>
      <div className='foot'>
      <p> © Copyright Supun Mahendra || All Rights Reserved</p>

      </div>

    </div>
    
  )
}
