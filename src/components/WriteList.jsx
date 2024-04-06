import React from 'react'

export const WriteList = ({selectMeal, onSelectMeal, A , isToggled}) => {
  

  
  return (
    <>
    {
      selectMeal?(
        A === 0 && !isToggled && selectMeal ?(
          selectMeal.map((item)=>(
            <div className='mealContainer' onClick={()=>onSelectMeal(item.strMeal)} >
              <div>
                <img className='mealImg' src={item.strMealThumb} alt={item.strMeal} key={item.idMeal} />
              </div>
              <div className='discription'>
                <h1 className='h1'>{item.strMeal}</h1>
                <p className='h1'> From {item.strArea}</p>
                <p className='h1'> {item.strCategory} Dish</p>
              </div>
            </div>
          ))):( isToggled && A === 0 && selectMeal &&
          selectMeal.map((item)=>(
            <div className='mealContainer' onClick={()=>onSelectMeal(item.strDrink)}>
              <div>
                  <img className='mealImg' src={item.strDrinkThumb} alt={item.strDrink} key={item.idDrink} />
              </div>
              <div className='discription'>
                  <h1 className='h1'>{item.strDrink}</h1>
                  <p className='h2'> {item.strAlcoholic} <sapn className='h2' > {item.strCategory}</sapn></p>
                  <p className='h2'> Served in <sapn className='h2' > {item.strGlass}</sapn></p>
              </div>
            </div>
          )))
      ):(<p className='h1'>Can't find a recipes according to your search</p>)
    }
    </>
  )
}
