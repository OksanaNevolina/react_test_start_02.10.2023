import React, {useEffect, useState} from 'react';
import Launche from "./launche";

const Launches = () => {
    const [launches,setlaunches] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches').then(value => value.json()).then(value => {
            const filtered=value.filter(item=>item.launch_year !=='2020');
            setlaunches(filtered)
        })
    },[])
    return (
        <div>
            {launches.map(launche=><Launche key={launche.launch_date_unix} launche={launche}/>)}
        </div>
    );
};

export default Launches;