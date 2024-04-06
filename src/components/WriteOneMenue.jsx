import React from 'react'

export const WriteOneMenue = ({oneselectMeal,A}) => {
    
  return (
    <>
    {
        oneselectMeal&& A === 1 ?(
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
         
          
          
        ))):( oneselectMeal && A === 2 &&
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
        
        }
    
    
    </>
    
  )
}
