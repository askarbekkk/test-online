import React, {useEffect, useState} from 'react';
import axios from "axios";
import FoodItem from "./FoodItem";


const Foods = () => {

    const [categories, setCategories] = useState([])


// Promise
    // get
    // delete
    // post
    // put/patch


// react-router-dom

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v1/1/categories.php").then((res) => {
            console.log(res.data.categories)
            setCategories(res.data.categories)
        })
    },[])
    return (
        <div className="container">
            <div className="row p-5">
                {
                    categories.map(el => (
                       <FoodItem el={el} key={el.idCategory}/>
                    ))
                }

            </div>
            
        </div>
    );
};

export default Foods;