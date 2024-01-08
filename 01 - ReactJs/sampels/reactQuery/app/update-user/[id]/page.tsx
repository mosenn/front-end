"use client";
import ContainerForm from "@/app/components/ContainerForm";
import { Form } from "@/app/components/form/Form";
import Title from "@/app/components/Title";

import { user } from "@/app/libs/users/user";
import React from "react";
import { useQuery } from "react-query";
const UpdateUser = ({ params }: { params: { id: string } }) => {
  console.log(params, "paramas");
  const { id } = params;
  const { data, isLoading } = useQuery(["users", id], () => user(id));
  console.log(data, "data in update user");

  return (
    <ContainerForm>
      <Title text="you can update user" />
      {!isLoading && (
        <Form
          userId={id}
          value={...data}
          style={
            "flex flex-col items-center -300 justify-center w-[100%] md:flex-row"
          }
        />
      )}
    </ContainerForm>
  );
};

export default UpdateUser;
