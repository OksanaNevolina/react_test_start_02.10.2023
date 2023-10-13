import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../services/carsServices";

import {Context} from "../App";

const CarsForm = () => {
    const {reset,register,handleSubmit,setValue} = useForm();
    
    const {setTrigger,carForUpdate,setCarForUpdate} = useContext(Context);
    console.log(carForUpdate)
    if(carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)
    }
    const saveCar = async (car) => {
        try {
            await carsServices.create(car);
                setTrigger()
            reset()
        }catch (e) {
            console.log(e.response.data)

        }
    }
    const updateCar = async (car) => {
        try {
            await carsServices.updateById(carForUpdate.id,car);
            setTrigger()
            reset()
            setCarForUpdate(null)
        }catch  {
        }}

    return (
        <form  onSubmit={handleSubmit(!carForUpdate?saveCar:updateCar)}>
            <input type="text" placeholder={'brand'}{...register('brand')}/>
            <input type="text" placeholder={'price'}{...register('price')}/>
            <input type="text" placeholder={'year'}{...register('year')}/>
            <button>{!carForUpdate?'save car':'update car' }</button>
        </form>
    );
};
export {
    CarsForm
}
