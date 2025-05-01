## ✅ React ToDo App

This guide will help you build a basic **ToDo List App using ReactJS** with features like adding, completing, and deleting tasks.


## 🧰 Prerequisites

- Basic knowledge of React
- Node.js installed
- VS Code or any IDE
- npm or yarn package manager

## 📦 Step 1: Create React App

```bash
npx create-react-app todo-app
cd todo-app
npm start


## 🧹 Step 2: Clean Up the Boilerplate

Delete unnecessary files from src/:

```plaintext

- App.css
- logo.svg
- reportWebVitals.js
- setupTests.js

Update App.js and index.css.

## 🧩 Step 3: Project Structure

```plaintext

src/
├── components/
│   ├── Todo.js
│   └── TodoList.js
├── App.js
├── index.js
└── index.css


## 🧠 Step 4: Build the ToDo Component

### 📁 components/Todo.js

```jsx
import React from 'react';

const Todo = ({ todo, index, markDone, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => markDone(index)}>✔️</button>
      <button onClick={() => removeTodo(index)}>❌</button>
    </div>
  );
};

export default Todo;

## 🧠 Step 5: Build the TodoList Component

### 📁 components/TodoList.js

```jsx
import React, { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isDone: false },
    { text: 'Build a Todo App', isDone: false }
  ]);

  const [value, setValue] = useState("");

  const addTodo = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isDone: false }];
    setTodos(newTodos);
    setValue("");
  };

  const markDone = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>📝 ToDo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add new task..."
        />
        <button type="submit">➕</button>
      </form>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          markDone={markDone}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

```
## 🧷 Step 6: Use TodoList in App

### 📁 App.js

```jsx
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

```

## 🎨 Step 7: Styling

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

input.input {
  padding: 8px;
  font-size: 16px;
  width: 60%;
  margin-right: 8px;
}

button {
  padding: 8px 12px;
  font-size: 16px;
  margin: 5px;
}
```

## 🚀 Step 8: Run the App

```bash

npm start

```
## ✅ Features Implemented

    - Add a task

    - Mark task as complete

    - Delete a task

    - Basic styling

## 💡 Enhancement Ideas

    - Add localStorage persistence

    - Add due dates and priorities

    - Use Material UI for advanced UI

    - Add filters (All, Completed, Incomplete)



