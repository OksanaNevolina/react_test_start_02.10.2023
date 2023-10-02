import React from 'react';

const Launche = ({launche}) => {
    const {mission_name,launch_year,links:{mission_patch_small}} = launche;
    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt="mission_name"/>
            <hr/>

        </div>
    );
};

export default Launche;