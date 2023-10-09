import React, {useEffect, useState} from 'react';

const CarsForm = () => {
    const [newCar,setNewCar] = useState({
        brand:'',
        price:'',
        year:''
    });
    const save = (e) => {
        e.preventDefault()
        console.log(e)
    }
    const inputOnChange = (key,value) => {
        setNewCar((prevState)=>({
            ...prevState,
            [key]:value
        }))

    }
    useEffect(()=>{
        console.log(newCar)
    },[newCar])
    return (
        <div>
            <form onSubmit={save}>
                <input type="text" placeholder={'brand'} onChange={(e)=>inputOnChange('brand',e.target.value)}/>
                <br/>
                <input type="text" placeholder={'price'} onChange={(e)=>inputOnChange('price',e.target.value)}/>
                <br/>
                <input type="text" placeholder={'year'}  onChange={(e)=>inputOnChange('year',e.target.value)}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
};


export default CarsForm;