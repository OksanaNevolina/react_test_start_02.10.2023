import React from 'react';

const Todo = ({todo}) => {
    const {id,userId,title} = todo;
    console.log(todo)
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <hr/>

        </div>
    );
};

export default Todo;