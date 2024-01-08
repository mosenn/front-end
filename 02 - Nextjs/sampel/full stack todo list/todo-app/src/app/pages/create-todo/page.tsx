"use client";
import Form from "@/app/components/Form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const router = useRouter();

  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleOnchangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
    // use fetch here for send data
    const res = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        desc: todo.desc,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Create your todo</h1>
      <section>
        <Form
          submitBtnText={"Create Todo"}
          handleSubmit={handleCreateTodo}
          handleOnchangeInputs={handleOnchangeInputs}
          todo={todo}
        />
      </section>
    </div>
  );
};

export default CreateTodo;
