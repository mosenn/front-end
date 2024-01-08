import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoWithId } from "../api/todo";

const Detail = () => {
  const [todoWithId, setTodoWithId] = useState({});
  const { id } = useParams();
  const todoId = async () => {
    const dataTodoWithId = await getTodoWithId(id);
    setTodoWithId(dataTodoWithId);
    console.log(todoWithId);
  };
  useEffect(() => {
    setTimeout(() => {
      todoId();
    }, 3000);
  }, []);
  console.log(todoWithId);
  const handleTodoCompleted = (todoId) => {
    console.log(todoId);
    if (todoWithId.completed) {
      const falsyTodo = { ...todoWithId, completed: false };
      setTodoWithId(falsyTodo);
    } else {
      // const tureTodo = { ...todoWithId, completed: true };
      const tureTodo = (todoWithId.completed = true);
      setTodoWithId({ ...todoWithId, tureTodo });
    }
  };
  return (
    <div>
      <h1>detail page : {id}</h1>
      {todoWithId.title ? (
        <div
          style={{ display: "flex" }}
          className={todoWithId.completed ? "green" : "gray"}
          key={todoWithId.id}
        >
          <p>{todoWithId.title}</p>
          <input
            readOnly
            onChange={() => {
              handleTodoCompleted(todoWithId.id);
            }}
            type="checkbox"
            checked={todoWithId.completed ? true : false}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
