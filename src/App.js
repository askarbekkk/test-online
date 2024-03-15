import './App.css';
import {useState, useEffect} from "react"
import axios from "axios"
import Example from "./Example";
import Foods from "./Foods";

import {Route, Router, Routes} from "react-router-dom"
import {Card} from "react-bootstrap";
import CategoryMeals from "./CategoryMeals";

function App() {

// useEffect

// render
// axios
// fetch
//https://restcountries.com/v3.1/all


    return <div className="container">

        <Routes>
            <Route path="/" element={<Foods/>}/>
            <Route path={"/category_meals/:categoryId"} element={<CategoryMeals/>}/>
        </Routes>



    </div>
}

export default App;
