import React from 'react';

const UserAddress = ({address:{street,suite,city}}) => {
    return (
        <div>
            <h4>address</h4>
            <div>street: {street }</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <hr/>
        </div>
    );
};

export default UserAddress;