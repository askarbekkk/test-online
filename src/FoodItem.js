import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom"

const FoodItem = ({el}) => {
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(10)

    const increaseQty = () => {
        setQty(qty+ 1)
        setPrice((qty + 1) * 10)
    }

    const decreaseQty = () => {
            setQty(qty - 1)
            setPrice((qty - 1) * 10)

    }
    return (
        <div className="col-3">
           <div className="p-3">
               <Link to={`/category_meals/${el.strCategory}`}>
                   <img src={el.strCategoryThumb} alt=""/>
               </Link>
               <h4>{el.strCategory}</h4>
               <div className="d-flex align-items-center justify-content-between">
                   <button className={`${qty === 1? "btn btn-secondary": "btn btn-danger"} `}
                           disabled={qty <= 1}
                           onClick={decreaseQty}
                   >-</button>
                   <h3>{qty}</h3>
                   <button className="btn btn-success"
                           onClick={increaseQty}
                   >+</button>
                   <h5 className="text-primary">{price}</h5>
           </div>

            </div>
        </div>
    );
};

export default FoodItem;