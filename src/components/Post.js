import React, {useState} from 'react';
import PostDetails from "./PostDetails";

const Post = ({post}) => {
    const {id,title} = post;
    const [show,setShow] = useState(false);
    return (
        <div>
            <div><b>id</b>: {id}</div>
            <div><i>title</i>: {title}</div>
         <button onClick={()=>setShow(!show)}>{show?'hide':'show'}</button>
            {show&&<PostDetails post={post}/> }
            <hr/>
        </div>
    );
};


export default Post;