import React from 'react';

const UserComponent = ({user,setUser}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>{id} <b>{name}</b></div>
            <div>{username}</div>
            <button onClick={()=>setUser({name,userId:id})}>show posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;