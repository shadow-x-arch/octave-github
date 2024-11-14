const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy data for To-Do items
let todos = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Build a To-Do API", completed: false },
    { id: 3, title: "Deploy to Production", completed: false },
];

// 1. CREATE - Add a new To-Do
app.post('/todos', (req, res) => {
    const { title, completed = false } = req.body;
    const newTodo = { id: todos.length + 1, title, completed };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// 2. READ - Get all To-Dos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// 3. READ - Get a single To-Do by ID
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ error: "To-Do not found" });
    res.json(todo);
});

// 4. UPDATE - Update a To-Do by ID
app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ error: "To-Do not found" });

    const { title, completed } = req.body;
    if (title) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

// 5. DELETE - Remove a To-Do by ID
app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ error: "To-Do not found" });

    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
