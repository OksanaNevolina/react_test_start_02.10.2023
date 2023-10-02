import React, {useEffect, useState} from 'react';
import Post from "./Post";


const Posts = ({user:{name,userId}}) => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value) )
    },[userId])
    console.log(posts)
    return (
        <div>
            <h2>{name}</h2>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;