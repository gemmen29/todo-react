import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AddNewTodo from './components/Todo/AddNewTodo/AddNewTodo';
import DisplayTodo from './components/Todo/DisplayTodo/DisplayTodo';

const dummyData = [
  { id: '1', title: 'Task 1', completed: true },
  { id: '2', title: 'Task 2', completed: false },
  { id: '3', title: 'Task 3', completed: false },
  { id: '4', title: 'Task 4', completed: false },
];

const todoKey = 'todos';

function App() {
  const [todos, setTodos] = useState(dummyData);

  useEffect(() => {
    if (localStorage.getItem(todoKey)) {
      setTodos(JSON.parse(localStorage.getItem(todoKey)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  }, [todos]);

  const AddNewTodoHandler = (todo) => {
    setTodos((preTodos) => [...preTodos, todo]);
  };

  const ChangeCheckHandler = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;
    setTodos((preTodos) => [...preTodos]);
  };

  const deleteHandler = (todoId) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column container justify-content-center align-items-center min-vh-100">
        <AddNewTodo onSubmit={AddNewTodoHandler} />
        <div className="p-2 w-100 d-flex flex-column gap-2 pt-5">
          {todos.map((todo) => (
            <DisplayTodo
              key={todo.id}
              todo={todo}
              onChange={ChangeCheckHandler}
              onDelete={deleteHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
