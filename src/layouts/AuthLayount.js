import React from 'react';
import {Outlet} from "react-router-dom";

const AuthLayount = () => {
    return (
        <div>

            <Outlet/>
        </div>
    );
};

export {
    AuthLayount
}