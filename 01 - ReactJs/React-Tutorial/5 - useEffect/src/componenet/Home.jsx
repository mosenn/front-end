import { useEffect, useState } from "react";
import { todo } from "../api/todo";
const Home = () => {
  const [Tododata, setTodoData] = useState([]);

  const takeTodoDAta = async () => {
    const TodosData = await todo();
    setTodoData(TodosData);
  };
  useEffect(() => {
    console.log("hi useEffect");
    setTimeout(() => {
      takeTodoDAta();
    }, 3000);
  }, []);
  const handleTodoCompleted = (todoId) => {
    console.log(todoId);
    const Todo = Tododata.find((todo) => {
      return todo.id === todoId;
    });
    if (Todo.completed) {
      const falsyTodo = (Todo.completed = false);
      setTodoData([...Tododata, falsyTodo]);
    } else {
      const trueTodo = (Todo.completed = true);
      setTodoData([...Tododata, trueTodo]);
    }
  };
  return (
    <div>
      <h1>Home page</h1>
      {Tododata.length > 0 ? (
        Tododata.slice(0, 10).map((todo) => {
          return (
            <div
              style={{ display: "flex" }}
              className={todo.completed ? "green" : "gray"}
              key={todo.id}
            >
              <p>{todo.title}</p>
              <input
                readOnly
                onChange={() => {
                  handleTodoCompleted(todo.id);
                }}
                type="checkbox"
                checked={todo.completed ? true : false}
              />
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}

      {/* {!Tododata.length > 0 && <h1>Loading...</h1>} */}
    </div>
  );
};

export default Home;
