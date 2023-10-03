import React from 'react';

const Post = ({post:{id,body}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;