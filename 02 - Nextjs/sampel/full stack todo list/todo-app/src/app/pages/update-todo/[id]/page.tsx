"use client";

import Form from "@/app/components/Form";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
const UpdateTodo = () => {
  const params = useParams();
  console.log(params.id, "paramas id");
  const router = useRouter();

  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleOnchangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
    // call fetch here for update todo
    const res = await fetch(`/api/todo/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: todo.title,
        desc: todo.desc,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      router.push("/");
    }
  };
  return (
    <div>
      <h1>update TOdo</h1>

      <Form
        submitBtnText={"update todo"}
        handleSubmit={handleSubmit}
        handleOnchangeInputs={handleOnchangeInputs}
        todo={todo}
      />
    </div>
  );
};

export default UpdateTodo;
