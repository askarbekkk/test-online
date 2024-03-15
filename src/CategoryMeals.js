import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const CategoryMeals = () => {
    const {categoryId} = useParams()
    const [meals, setMeals] = useState([])


    // console.log(id.categoryId)
    console.log(meals)

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
            .then((res) => setMeals(res.data.meals))
    },[])

    return (
        <div className="container ">
            <div className="row p-5">
                {
                    meals.map(meal => (
                        <div className="col-3" key={meal.idMeal}>
                          <div className="p-3">
                              <img  style={{
                                  width: "250px",
                                  height: "200px"

                              }} src={meal.strMealThumb} alt=""/>

                              <p className="py-2">{meal.strMeal}</p>
                          </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default CategoryMeals;