import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayount, MainLayount, PublicLayount} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const router = createBrowserRouter([
    {
        path : '',
        element: <MainLayount/>,
        children:[
            {
                index: true,
                element:<Navigate to={'cars'}/>
            },
            {
                element:<PublicLayount/>,
                children:[
                    {
                        path:'register',
                        element:<RegisterPage/>
                    },
                    {
                        path:'login',
                        element:<LoginPage/>
                    }
                ]
            },
            {
                element:<AuthLayount/>,
                children:[
                    {
                        path:'cars',
                        element:<CarsPage/>
                    }
                ]
            }

        ]
    }
])
export {
    router
}