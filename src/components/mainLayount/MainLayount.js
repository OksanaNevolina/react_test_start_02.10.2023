import React from 'react';
import {Header} from "../header";
import {Outlet} from "react-router-dom";

const MainLayount = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayount
};