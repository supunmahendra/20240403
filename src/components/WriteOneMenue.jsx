import React from 'react'

export const WriteOneMenue = ({oneselectMeal, A, isToggled}) => {
    let ingredients = [];
    
    for (let i = 1; i <= 2; i++) {
        let ingredient = oneselectMeal["strMeal" + i];
        console.log(ingredient);
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    console.log(ingredients);

  return (
    <> 
    { 
        


        oneselectMeal?(
            A === 2 && !isToggled ?(
                oneselectMeal.map((item)=>(
                  <div className='mealContainerSingle'>
                                <div className='mealContainer'>
                                    <div>
                                        <img className='mealImgSingle' src={item.strMealThumb} alt={item.strMeal} key={item.idMeal} />
                                    </div>
                                    <div className='discription'>
                                        <h1 className='h1'>{item.strMeal}</h1>
                                        <p>From {item.strArea}</p>
                                        <p>Ingridients:</p>
                                        <div >
                                            {[...Array(20).keys()].map((i) => (
                                                item["strIngredient" + (i + 1)]&& (
                                                <p className='i' key={i}>{i+1}.{ item["strIngredient" + (i + 1)]}</p>
                                                )
                                            ))}
                                        </div>
                                            
                                    </div>
                                </div>
                                <h1 className='h1'>preparation method</h1>
                                <p> {item.strInstructions}</p>
                  </div>
                ))):( isToggled && A === 1 &&
                    oneselectMeal.map((item)=>(
        
                        <div className='mealContainerSingle'>
                            <div className='mealContainer'>
                                <div>
                                    <img className='mealImgSingle' src={item.strDrinkThumb} alt={item.strDrink} key={item.idDrink} />
                                </div>
                                <div className='discription'>
                                    <h1 className='h1'>{item.strDrink}</h1>
                                    <p> {item.strAlcoholic} <sapn className='h2'> {item.strCategory}</sapn></p>
                                    <p>Ingridients:</p>
                                            {[...Array(20).keys()].map((i) => (
                                                item["strIngredient" + (i + 1)]&& (
                                                    <p className='i' key={i}>{i+1}.{ item["strIngredient" + (i + 1)]}</p>
                                                )
                                            
                                            ))}
                                </div>
                            </div>
                            <h1 className='h1'>preparation method</h1>
                            <p>{item.strInstructions}</p>
                    </div>
                )))     
          ):(
            <p className='h1'>Can't find Fetch data!</p>
        )
        }
    </>
  )
}
