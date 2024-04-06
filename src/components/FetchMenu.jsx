
import { useEffect } from 'react'
import { useState } from 'react'

export const FetchMenu = (isToggled,searchedText) => {

        const [selectMeal,setSelectMeal] = useState([]);
        const [error,setError] = useState(null);
        const [isloaded, setIsLoaded] = useState(false);

        //console.log(isToggled)
        //console.log(searchedText)

    useEffect (()=>{
        const fetchMeals = async ()=>{
            setIsLoaded(false)
            try{
                let url
            if(isToggled){
                 url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedText}`             
            }else{
                 url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`
            }
            
                const response = await fetch(url)
                if(response.ok){
                    const meal = await response.json();
                    if(isToggled){
                        setSelectMeal(meal.drinks)
                    }else{
                        setSelectMeal(meal.meals)
                    }
                    setIsLoaded(true);
                    //console.log (selectMeal)
                }else{
                    throw new Error ('Can not fetch the product')
                }
            }
            catch(error){
                 setError(error)
                 setIsLoaded(false);
                 //console.log ('error')
            }
        }

        fetchMeals();

        





    },[isToggled,searchedText])

    

  return [selectMeal,error,isloaded];
}
