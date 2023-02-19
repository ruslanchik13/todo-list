import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, remove}) => {

    return (
        <div>
            {todos.map((item, index) =>
                <TodoItem remove={remove} item={item} number={index + 1} title={item.title} body={item.body}/>
            )}
        </div>
    );
};

export default TodoList;