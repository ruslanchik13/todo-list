import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const TodoForm = ({create}) => {

    const [todo, setTodo] = useState({title:'', body:''})

    const addTodo = (e) => {
        e.preventDefault()
        create({id: Math.random(), ...todo})
        setTodo({title: '', body: ''})
    }

    return (
        <form>
            <Input value={todo.title}
                   onChange={event => setTodo({...todo, title: event.target.value})}
                   placeholder='Название'/>
            <Input value={todo.body}
                   onChange={event => setTodo({...todo, body: event.target.value})}
                   placeholder='О чем'/>
            <Button onClick={addTodo}>
                Добавить дело
            </Button>
        </form>
    );
};

export default TodoForm;