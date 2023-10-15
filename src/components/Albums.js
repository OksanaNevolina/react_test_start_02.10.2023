import React, {useEffect, useState} from 'react';
import Album from "./Album";
import {albumService} from "../services/albumService";
import {urls} from "../constants/urls";

const Albums = () => {
    const [album,setAlbum] = useState([]);
    useEffect(()=>{
        albumService.getAll(urls.albums).then(({data})=>setAlbum(data))
    },[])
    return (
        <div>
            <h2>Albums</h2>
            {album.map(album=> <Album key={album.id} album={album} />)}
            
        </div>
    );
};

export default Albums;