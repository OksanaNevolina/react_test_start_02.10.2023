import React, {createContext, useState} from 'react';
import Cars from "./Components/Cars";
import {CarsForm} from "./Components/CarsForm";

export const Context = createContext(null)
const App = () => {
    const [trigger,setTrigger] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);

    return (
        <Context.Provider value={
            {
                trigger,
                setTrigger:() => setTrigger(prev => !prev),

                carForUpdate,
                setCarForUpdate
            }
        }>
            <CarsForm/>
            <hr/>
            <Cars/>
        </Context.Provider>


    );
};


export {
    App
}
