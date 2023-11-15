import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css'
import {carActions} from "../../../redux/slices/carSlice";

const CarForm = () => {
    const {reset,register,handleSubmit,setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();
    if(carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)
    }
    const save =async (car)=>{
       await dispatch(carActions.createCar(car))
        reset()
    }
    const update = async (car)=>{
      await
          dispatch(carActions.updateCar({id:carForUpdate.id, car}))
        reset()
    }

    return (
        <form className={css.Form} onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text"placeholder={'brand'}{...register('brand')}/>
            <input type="text"placeholder={'price'}{...register('price')}/>
            <input type="text"placeholder={'year'}{...register('year')}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {
    CarForm
}