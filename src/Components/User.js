import React, {useContext} from 'react';
import {Context} from "../App";

const User= ({user}) => {
    const {id,name,username} = user;
    const {setUsersId} = useContext(Context);
    console.log(setUsersId)
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <button onClick={()=>setUsersId({name,id})}>show post</button>
            <hr/>
        </div>
    );
}

export default User;