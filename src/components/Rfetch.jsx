import React from 'react'

export const Rfetch = (A) => {
    
    const [selectMeal,setSelectMeal] = useState([]);
    const [error,setError] = useState(null);
    
    useEffect (()=>{
        const fetchMeals = async ()=>{
            
            try{
                let url = 'https://www.themealdb.com/api/json/v1/1/random.php'
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
    },[A])

  return [selectMeal,error];
}
