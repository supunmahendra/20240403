
import { useEffect } from 'react'
import { useState } from 'react';

export const FetchMenu = (isToggled,searchedText) => {

        const [selectMeal,setSelectMeal] = useState([]);
        const [error,setError] = useState(null);

        console.log(isToggled)
        console.log(searchedText)

    useEffect (()=>{
        const fetchMeals = async ()=>{
            
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
                    setSelectMeal(meal);
                    console.log (selectMeal)
                }else{
                    throw new Error ('can not fetch the product')
                }
            }
            catch(error){
                 setError(error)
                 console.log ('error')
            }
        }

        fetchMeals();
    },[isToggled,searchedText])

  return [selectMeal,error];
}
