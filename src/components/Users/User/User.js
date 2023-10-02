import React from 'react';
import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";

const User = ({user}) => {
    const {id,name,username,email,phone,website,address:{street,suite,city},company:{name:companyName,catchPhrase,bs}} = user;
    return (
        <div>
            <UserDetails data={{id,name,username,email,phone,website}}/>
            <hr/>
            <UserAddress address={{street,suite,city}}/>
            <hr/>
            <Company company={{name:companyName,catchPhrase,bs}}/>
            <hr/>
            <hr/>
            <hr/>


        </div>
    );
};

export default User;