"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { act } from "@testing-library/react";

interface todoType {
  title: string;
  desc: string;
  _id: string;
}
const Todos = () => {
  const [todo, setTodo] = useState<todoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("/api/todo", { method: "GET" });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);

        // setTodo(data);
        // * for testing maping todo in return
        if (Array.isArray(data)) {
          act(() => {
            setTodo(data);
          });
        }
      }
    };
    getTodos();
  }, []);

  const deleteTodo = async (todoId: string) => {
    const res = await fetch(`/api/todo/${todoId}`, { method: "DELETE" });
    if (res.status === 200) {
      const data = await res.json();
      console.log(data._id, "data id");
      const updateUiTodo = todo.filter((t: { _id: string }) => {
        return t._id !== data._id;
      });
      console.log(updateUiTodo, "update todo");
      setTodo(updateUiTodo);
    }
  };
  return (
    <div>
      {todo?.map((t: todoType) => (
        <section key={t._id} role="section">
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
          <div className="p-1 m-3">
            <Link href={`/pages/update-todo/${t._id}`}>update todo</Link>
            <button
              onClick={() => {
                deleteTodo(t._id);
              }}
            >
              delete todo
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Todos;
