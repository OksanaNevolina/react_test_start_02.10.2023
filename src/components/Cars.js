import React, {useEffect, useState} from 'react';
import Car from "./Car";

const Cars = ({trigger,setTrigger,setСarForUpdate}) => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(value => setCars(value))
    },[trigger])


    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setTrigger={setTrigger} setСarForUpdate={setСarForUpdate}/>)}
        </div>
    );
};


export default Cars;