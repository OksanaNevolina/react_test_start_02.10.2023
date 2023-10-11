import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

const CarsForm = ({setTrigger,carForUpdate,setСarForUpdate}) => {
    const {handleSubmit,register,reset,formState:{isValid,errors},setValue} = useForm();
    useEffect(()=>{
        if(carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate])
    const saveCar = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method:'POST'
        })
            .then(value => {
                if (!value.ok){
                    throw Error(value.status+'not ok')
                }
                return value.json()
            })
            .then(()=> {
                setTrigger(prev => !prev)
                reset()
            })
            .catch(e=>{
                console.log(e)
            })
    }
    const updateCar = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'PUT'
        })
            .then(value => value.json())
            .then((value) => {
                console.log(value)
                setTrigger(prev=>!prev)
                setСarForUpdate(null)
                // reset()

            })
    }


    return (
        <div>
            <form onClick={handleSubmit(!carForUpdate?saveCar:updateCar)}>
                <input type="text" placeholder={'brand'} {...register('brand',{
                    required:true,
                    pattern:' ^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$',
                    min:{value:3,message:'мінімальна кількість букв 3'},
                    max:{value:20,message:'макстмальна кількість букв 20'}
                })} />
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={'price'} {...register('price',{
                    valueAsNumber:true,
                    required:true,
                    min:{value:100,message:'мінімальна ціна 100'},
                    max:{value:1000000,message:'макстмальна ціна 1000000'}
                })} />
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year',{
                    valueAsNumber:true,
                    required:true,
                    min:{value:1990,message:'авто не старше 1990року'},
                    max:{value:2023,message:' авто до поточного року'}
                })} />
                {errors.year && <span>{errors.year.message}</span>}
                <button >{!carForUpdate?"save":"update"}</button>
            </form>
        </div>
    );
};

export default CarsForm;