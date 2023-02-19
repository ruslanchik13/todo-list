import React from 'react';
import Button from "./UI/button/Button";

const TodoItem = (props) => {
    return (
        <div className='todo'>
            <div>
                <strong>{props.number}. {props.title}</strong>
                <div>{props.body}</div>
            </div>
            <div>
                <Button onClick={() => props.remove(props.item)}>Delete</Button>
            </div>
        </div>
    );
};

export default TodoItem;