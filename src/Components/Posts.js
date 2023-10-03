import React, {useContext} from 'react';
import {Context} from "../App";
import Post from "./Post";

const Posts = () => {
    const {posts,usersId:{name}} = useContext(Context);
    console.log(name)

    return (
        <div>
            <h3>{name}</h3>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;