import { useEffect } from 'react'
import { useState } from 'react'


export const Rfetch = (B) => {
    
    const [selectMeal,setSelectMeal] = useState([]);
    const [error,setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);

    useEffect (()=>{

        const fetchMeals = async ()=>{
             setIsLoaded(false)
            try{
                let url = 'https://www.themealdb.com/api/json/v1/1/random.php'
                const response = await fetch(url)
                if(response.ok){
                    const meal = await response.json();
                    if(meal.drinks){
                        setSelectMeal(meal.drinks)
                    }else{
                        setSelectMeal(meal.meals)
                    }
                    setIsLoaded(true);
                    //console.log (selectMeal)
                }else{
                    throw new Error ('can not fetch the product')
                }
            }
            catch(error){
                 setError(error)
                 setIsLoaded(false)
                 console.log ('error')
            }
        }

        fetchMeals();
    },[B])

  return [selectMeal,error,isloaded];
}
