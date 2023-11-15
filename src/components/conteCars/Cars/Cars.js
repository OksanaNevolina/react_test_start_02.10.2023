import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car";
import css from './Cars.module.css'
import {carActions} from "../../../redux/slices/carSlice";

const Cars = () => {
    const {cars} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])
    console.log(cars)
    return (
        <div className={css.cars}>
            {cars.map(car=><Car key={car.id} car={car} />)}
        </div>
    );
};

export {
    Cars
}