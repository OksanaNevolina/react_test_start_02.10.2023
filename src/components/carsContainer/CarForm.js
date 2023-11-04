import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = () => {
    const {reset,register,handleSubmit} = useForm();

    const saveCar = async (car) => {
        await carService.create(car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(saveCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save car</button>
        </form>
    );
};

export {
    CarForm
}