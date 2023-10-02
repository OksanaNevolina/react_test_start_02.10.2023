import React, {useEffect, useState} from 'react';
import Post from "./Post";
import PostDetails from "./PostDetails";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) =>setPosts(posts));
    },[])
    return (
        <div>
            {posts.map((post) =><Post  key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;