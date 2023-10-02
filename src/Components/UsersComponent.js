import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent";

const UsersComponent = ({setUser}) => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user} setUser={setUser}/>)}
        </div>
    );
};

export default UsersComponent;