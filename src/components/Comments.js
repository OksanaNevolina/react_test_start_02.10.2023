import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {commentService} from "../services/commentService";
import {urls} from "../constants/urls";

const Comments = () => {
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        commentService.getAll(urls.comments).then(({data})=>setComments(data))
        },[])
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;