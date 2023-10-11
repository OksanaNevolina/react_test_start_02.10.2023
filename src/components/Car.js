import React from 'react';

const Car = ({car,setTrigger,setСarForUpdate}) => {
    const {id,brand,price,year} = car;

    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{method:'DELETE'}).then(()=>{
            setTrigger(prev=>!prev)
        })
    }
    return (
        <div>
            <div> id : { id}</div>
            <div> brand : { brand}</div>
            <div> price : { price}</div>
            <div> year : { year}</div>
            <button onClick={deleteCar}>delete</button>
            <button onClick={()=>setСarForUpdate(car)}>update</button>
            <hr/>
        </div>
    );
};

export default Car;