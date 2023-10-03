import React from 'react';

const User = ({user}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    );
};

export default User;