import React, {createContext, useEffect, useState} from 'react';

import Users from "./Components/Users";
import Posts from "./Components/Posts";

export  const Context = createContext(null);
const App = () => {

    const [users,setUsers] = useState([]);
    // const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    console.log(users)


    // useEffect(()=>{},[])

    return (
        <div>
            <Context.Provider value={users}>
             <Users/>
            <Posts/>
            </Context.Provider>
        </div>
    );
};

export default App;
