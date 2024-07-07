import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [{ task: "Your tasks appear here", id: uuidv4(), isDone: false }]
  );

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
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <ul className="ulist">
        {todos.map((todo) => (
          <li key={todo.id} className="liItem">
            <div>
              <button
                onClick={() => markAsDone(todo.id)}
                className="doneBtn"
                style={
                  todo.isDone
                    ? { color: "#00bf06", border: "1px solid #00bf06" }
                    : {}
                }
              >
                &#10004;
              </button>
              &nbsp;&nbsp;
              <span
                style={
                  todo.isDone
                    ? { textDecorationLine: "line-through", color: "#00bf06" }
                    : {}
                }
              >
                {todo.task}
              </span>
            </div>
            <div>
              <button onClick={() => deleteTodo(todo.id)} className="delBtn">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
