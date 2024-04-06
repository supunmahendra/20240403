import React from 'react'

export const WriteOneMenue = ({oneselectMeal, A, isToggled}) => {
    
  return (
    <>
    {
        oneselectMeal?(
            A === 2 && !isToggled ?(
                oneselectMeal.map((item)=>(
                  <del className='mealContainerSingle'>
                                <del className='mealContainer'>
                                    <del>
                                        <img className='mealImgSingle' src={item.strMealThumb} alt={item.strMeal} key={item.idMeal} />
                                    </del>
                                    <del className='discription'>
                                        <h1 className='h1'>{item.strMeal}</h1>
                                        <p>From {item.strArea}</p>
                                    </del>
                                </del>
                                <h1 className='h1'>preparation method</h1>
                                <p>From {item.strInstructions}</p>
                  </del>
                ))):( isToggled && A === 1 &&
                    oneselectMeal.map((item)=>(
        
                        <del className='mealContainerSingle'>
                            <del className='mealContainer'>
                                <del>
                                    <img className='mealImgSingle' src={item.strDrinkThumb} alt={item.strDrink} key={item.idDrink} />
                                </del>
                                <del className='discription'>
                                    <h1 className='h1'>{item.strDrink}</h1>
                                    <p> {item.strAlcoholic} <sapn className='h2'> {item.strCategory}</sapn></p>
                                </del>
            
                            </del>
                            <h1 className='h1'>preparation method</h1>
                            <p>From {item.strInstructions}</p>
        
                    </del>
                )))  
    
          ):(
            <p className='h1'>Can't find a recipes according to your search</p>
        )
        
        }
    </>
    
  )
}
