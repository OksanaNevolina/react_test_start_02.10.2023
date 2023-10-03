import React, {createContext, useEffect, useState} from 'react';

import Users from "./Components/Users";
import Posts from "./Components/Posts";

export  const Context = createContext(null);
const App = () => {

    const [users,setUsers] = useState([]);

    const [posts,setPosts] = useState([]);

    const [usersId,setUsersId] = useState({});
    console.log(usersId)



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${usersId.id}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    },[usersId.id])





    return (
        <div>
            <Context.Provider value={{users,setUsersId,posts,usersId}}>
             <Users/>
            <Posts/>
            </Context.Provider>
        </div>
    );
};

export default App;
