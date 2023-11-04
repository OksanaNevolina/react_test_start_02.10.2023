import React from 'react';

import {Outlet} from "react-router-dom";
import {Header} from "../components";

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