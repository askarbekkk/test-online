import React from 'react';
import {useEffect, useState} from "@types/react";
import axios from "axios";

const Countries = () => {
    const [countries, setCountries] = useState([])



    useEffect(() => {
        axios("https://restcountries.com/v3.1/all")
            .then((res) => setCountries(res.data) )
    }, [])

    return (
        <div className="container">
            <div className="row p-5">
                {
                    countries.map(el => (
                        <div className="col-4">
                            <img style={{
                                width: "300px",
                                height: "180px",
                                objectFit: "contain"
                            }} src={el.flags.png} alt=""/>
                            <h5 className="ps-3">{el.name.common}</h5>
                        </div>
                    ))
                }
            </div>
            </div>
    );
};

export default Countries;