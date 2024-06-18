import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "Your tasks appear here", id: uuidv4(), isDone: false },
  ]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return todos.filter((prevTodos) => prevTodos.id != id);
    });
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="addTask">
        <input
          type="text"
          placeholder="Add Task"
          onChange={updateTodoValue}
          value={newTodo}
        />
        &nbsp;&nbsp;&nbsp;
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <br />
      <br />
      <hr />
      <h3>Tasks:</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="liItem">
            <span
              style={
                todo.isDone
                  ? { textDecorationLine: "line-through", color: "#00bf06" }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)} className="delBtn">
              X
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => markAsDone(todo.id)}
              className="doneBtn"
              style={todo.isDone ? { display: "none" } : {}}
            >
              &#10004;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
