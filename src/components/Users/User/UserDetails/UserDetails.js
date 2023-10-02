import React from 'react';

const UserDetails = ({data:{id,name,username,email,phone,website}}) => {
    return (
        <div>
            <h3>UserDetails</h3>
           <div><b>id</b>: {id}</div>
           <div><b>name</b>: {name}</div>
           <div><b>username</b>: {username}</div>
           <div><b>email</b>: {email}</div>
           <div><b>phone</b>: {phone}</div>
           <div><b>website</b>: {website}</div>

        </div>
    );
};

export default UserDetails;