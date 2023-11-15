import React from 'react';
import css from './Car.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux/slices/carSlice";

const Car = ({car}) => {
    const {id,brand,price,year} = car;
    const dispatch = useDispatch();

    const deletecar = async () => {
        await dispatch(carActions.deleteCar(id))
    }

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deletecar}>delete</button>
        </div>
    );
};

export {
    Car
}