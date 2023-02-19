import './style/app.css'
import TodoForm from "./components/TodoForm";
import {useEffect, useState} from "react";
import TodoList from "./components/todoList";

function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const remove = (todo) => {
        setTodos(todos.filter((p) => p.id !== todo.id))
    }

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])

    }

    return (
        <div className="App">
            <TodoForm create={createTodo}/>
            <TodoList remove={remove} todos={todos}/>
        </div>
    );
}

export default App;
