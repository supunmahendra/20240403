import React from 'react'

export const WriteList = ({selectMeal,onSelectMeal,A}) => {
  

  
  return (
    <>
    {
    selectMeal.meals && A === 0 ?(
    selectMeal.meals.map((item)=>(
      <del className='mealContainer' onClick={()=>onSelectMeal(item.strMeal)} >
        <del>
          <img className='mealImg' src={item.strMealThumb} alt={item.strMeal} key={item.idMeal} />
        </del>
        <del className='discription'>
          <h1 className='h1'>{item.strMeal}</h1>
          <p className='h1'> From {item.strArea}</p>
        </del>
        

      </del>
      
    ))):( selectMeal.drinks && A === 0 &&
    selectMeal.drinks.map((item)=>(
      <del className='mealContainer' onClick={()=>onSelectMeal(item.strDrink)}>
        <del>
            <img className='mealImg' src={item.strDrinkThumb} alt={item.strDrink} key={item.idDrink} />
        </del>
        <del className='discription'>
            <h1 className='h1'>{item.strDrink}</h1>
            <p className='h2'> {item.strAlcoholic} <sapn className='h2' > {item.strCategory}</sapn></p>
        </del>

      </del>
    )))
    
    }
    

    </>
    
  )
}
