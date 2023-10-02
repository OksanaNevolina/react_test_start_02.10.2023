import React from 'react';

const Post = ({post:{id,titel,body}}) => {
    return (
        <div>
          <div>{id} {titel}</div>
          <div>{body}</div>
        </div>
    );
};

export default Post;