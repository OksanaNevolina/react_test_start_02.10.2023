import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {useParams} from "react-router-dom";
import {postsService} from "../services/postsService";
import {urls} from "../constants/urls";

const Posts = () => {
    const {postId} = useParams();
    console.log(postId)
    const [post,setPost] = useState(null);
useEffect(()=>{
    postsService.getById(postId).then(({data})=>setPost(data))

},[postId])
    return (
        <div>
            {post&&<Post post={post}/>}
        </div>
    );
};

export default Posts;