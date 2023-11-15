import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayount} from "./components";
import {ConteCars} from "./components/conteCars/ConteCars";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayount/>,
        children:[
            {
            index:true,
            element:<Navigate to={'cars'}/>
        },
            {
                path:'cars',
                 element:<ConteCars/>
            }
        ]
    }
])

export {
    router
}