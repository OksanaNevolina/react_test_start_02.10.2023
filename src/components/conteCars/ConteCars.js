import React from 'react';
import {Cars} from "./Cars";
import {CarForm} from "./CarForm";

const ConteCars = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    ConteCars
}