import React, { useState } from 'react'
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodo from './EditTodoForm';

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false
      },
    ]);
  };

  const deleteTask = (id) => setTodos(
    todos.filter(todo => todo.id !== id)
  );

  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map(((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing, task: task} : todo))
    )
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  };

  return (
    <div className='TodoWrapper'>
      <h1>在这里添加一些任务吧！</h1>
      <TodoForm addTask={addTask} />
      {
        todos.map((todo) =>
          todo.isEditing ?
            <EditTodo
              key={todo.id}
              task={todo}
              editTask={editTask}
            />
            :
            <Todo
              key={todo.id}
              task={todo}
              deleteTask={deleteTask}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
        )
      }
    </div>
  )
}

export default TodoWrapper
