import React, {useEffect, useState} from 'react';
import Car from "./Car";

const Cars = () => {
    const [cars,setCars] = useState([]);

    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(value => setCars(value))
    },[])
    return (
        <div>
            {cars.map(car =><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;