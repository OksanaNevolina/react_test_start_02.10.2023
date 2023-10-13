import React, {useContext} from 'react';
import {carsServices} from "../services/carsServices";
import {Context} from "../App";

const Car = ({car}) => {
    const {id,brand,price,year} = car;
    const {setTrigger,setCarForUpdate} = useContext(Context);

    const deleteCAR = async () => {
        try {
           await carsServices.deleteCar(id);
            setTrigger()
        }catch (e) {
        }
    }
    
    const updateCar = async () => {
         try {
           await carsServices.updateById(id,car);
         }catch  {
         }}

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCAR}>delete</button>
        </div>
    );
}
export default Car
