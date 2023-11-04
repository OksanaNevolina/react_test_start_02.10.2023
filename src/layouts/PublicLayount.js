import React from 'react';
import {Outlet} from "react-router-dom";

const PublicLayount = () => {
    return (
        <div>

            <Outlet/>
        </div>
    );
};

export {
    PublicLayount
}