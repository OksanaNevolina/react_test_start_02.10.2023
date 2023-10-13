import React, {useContext, useEffect, useState} from 'react';

import {carsServices} from "../services/carsServices";
import Car from "./Car";
import {Context} from "../App";

const Cars = () => {
    const [cars,setCars] = useState([]);
    const {trigger} = useContext(Context);
    console.log(cars)
    useEffect(()=>{
        carsServices.getAll().then(value => setCars(value.data))
    },[trigger])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;