import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "../../validators";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";



const RegisterForm = () => {
   const {register,handleSubmit,formState:{errors, isValid}} = useForm({
       mode:"onBlur",
       resolver: joiResolver(registerValidator)
   });
   const [serverErrors,setServerErrors] = useState(null);
   const navigete = useNavigate();
    const save = async (user) => {
        try {
            await authService.register(user)
            setServerErrors(null)
            navigete('/login ')

        }catch (e) {
            setServerErrors(e.response.data)
        }

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div> username<input type="text" placeholder={'username'}{...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            {serverErrors && <div>користувач з таким ім'ям вже зареєстрований</div>}
            <hr/>
            <div> password<input type="text" placeholder={'password'}{...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <hr/>
            <div> re_password <input type="text" placeholder={'re_password'}{...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>register</button>

        </form>
    );
};

export {
    RegisterForm
}