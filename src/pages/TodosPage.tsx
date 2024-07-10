import React, {useEffect, useState} from 'react';
import {ITodo} from "../models/todo/ITodo";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            // .then(console.log);
            .then(res => {setTodos(res.todos)})
    }, []);

    return (
        <div>
            TodosPage
            {
                todos.map(value => <div key={value.id}>{value.todo}</div>)
            }
        </div>
    );
};

export default TodosPage;