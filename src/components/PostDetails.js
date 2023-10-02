import React from 'react';

const PostDetails = ({post:{id,title,body}}) => {
    return (
        <div>
           <div>{id}</div>
           <div><b>{title}</b></div>
           <div><h3>{body}</h3></div>

        </div>
    );
};

export default PostDetails;