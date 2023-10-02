import React from 'react';

const Company = ({company:{name:companyName,catchPhrase,bs}}) => {
    return (
        <div>
            <b>Company</b>
            <p>Name- {companyName}</p>
            <p>catchPhrase- {catchPhrase}</p>
            <p>bs- {bs}</p>
        </div>
    );
};

export default Company;