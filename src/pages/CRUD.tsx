// src/pages/CRUD.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CRUD.css';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const CRUD: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const [editTodoTitle, setEditTodoTitle] = useState<string>('');

    // Fetch Todos (Read)
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        };
        fetchTodos();
    }, []);

    // Create a new Todo
    const addTodo = async () => {
        if (newTodo.trim() === '') return;

        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: newTodo,
            completed: false,
        });
        setTodos([...todos, response.data]);
        setNewTodo('');
    };

    // Update an existing Todo
    const updateTodo = async (id: number) => {
        if (editTodoTitle.trim() === '') return;

        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            title: editTodoTitle,
            completed: false,
        });
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
        setEditTodoId(null);
        setEditTodoTitle('');
    };

    // Delete a Todo
    const deleteTodo = async (id: number) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="crud-container">
            <h1>CRUD Page</h1>
            <div className="crud-create">
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <table className="crud-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>
                                {editTodoId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editTodoTitle}
                                        onChange={(e) => setEditTodoTitle(e.target.value)}
                                    />
                                ) : (
                                    todo.title
                                )}
                            </td>
                            <td>
                                {editTodoId === todo.id ? (
                                    <button onClick={() => updateTodo(todo.id)}>Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => {
                                            setEditTodoId(todo.id);
                                            setEditTodoTitle(todo.title);
                                        }}>Edit</button>
                                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CRUD;
