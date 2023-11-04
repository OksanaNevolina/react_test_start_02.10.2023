import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";

const LoginForm = () => {
    const {handleSubmit,register} = useForm();
    const [serverError,setServerError] = useState(null);

    const navigate= useNavigate();
    const {setIsAuth,setIsMe} = useAppContext();
    const login = async (user) => {
        try {
            await authService.login(user)
            const {data} = await authService.me();
            setIsMe(data)
            setServerError(null)
            navigate('/cars')
            setIsAuth(true)

        } catch (e){
            setServerError(e.response.data)


        }

    }
    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError&& <div>не вірний пароль або логін</div>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>

            <button>login</button>

        </form>
    );
};

export {
    LoginForm
    
}