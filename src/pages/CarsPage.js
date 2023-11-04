import React from 'react';
import {Cars} from "../components";
import {CarForm} from "../components/carsContainer/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
}