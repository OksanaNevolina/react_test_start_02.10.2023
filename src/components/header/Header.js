import React from 'react';

import css from './Header.module.css'

import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";
import {authService} from "../../services";

const Header = () => {
    const {isAuth,me,setIsMe,setIsAuth} = useAppContext();
    const navigate = useNavigate();

    const logOut = () => {
        authService.deleteToken()
        navigate('/login')
        setIsMe(null)
        setIsAuth(null)

    }
    return (
        <div className={css.Header}>
            <h2>Cars</h2>

                {
                    isAuth ?
                        <div>
                            <div>{me.username}</div>
                            <button onClick={logOut}>Вихід</button>
                        </div>

                        :
                        <div>
                            <NavLink to={'register'}>register</NavLink>
                            <NavLink to={'login'}>login</NavLink>
                        </div>

                }
        </div>
    );
};

export {
    Header
};