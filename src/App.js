import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import {useEffect, useState} from "react";

const App = () => {
    const initialState = JSON.parse(localStorage.getItem("tod")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

  return (
      <div className="container">
          <div className="app__wrapper">
              <div>
                  <Header todos={todos}/>
                  <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
              </div>
              <div className="todo-list">
                  <ToDoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} editTodo={editTodo}/>
              </div>
          </div>
    </div>
  );
}

export default App;
