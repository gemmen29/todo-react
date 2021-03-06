import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AddNewTodo from './components/Todo/AddNewTodo/AddNewTodo';
import DisplayTodo from './components/Todo/DisplayTodo/DisplayTodo';

const todoKey = 'todos';

function App() {
  const [todos, setTodos] = useState([]);

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
    setTodos((preTodos) => {
      const allTodos = [...preTodos];
      const todo = allTodos.find((todo) => todo.id === todoId);
      todo.completed = !todo.completed;
      return [...allTodos];
    });
  };

  const deleteHandler = (todoId) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== todoId));
  };

  const editHandler = (todoId, newTitle) => {
    setTodos((preTodos) => {
      const allTodos = [...preTodos];
      const todo = allTodos.find((todo) => todo.id === todoId);
      todo.title = newTitle;
      return [...allTodos];
    });
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column container justify-content-center align-items-center flex-fill">
        <AddNewTodo onSubmit={AddNewTodoHandler} />
        <div className="p-2 w-100 d-flex flex-column gap-2 pt-5">
          {todos.map((todo) => (
            <DisplayTodo
              key={todo.id}
              todo={todo}
              onChangeCheck={ChangeCheckHandler}
              onEdit={editHandler}
              onDelete={deleteHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
