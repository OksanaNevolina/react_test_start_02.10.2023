import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, yaer} = car;
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>yaer : {yaer}</div>
            <hr/>
        </div>
    );
};

export {
    Car
}
