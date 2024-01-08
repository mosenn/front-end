import React from "react";
import { Form } from "../components/form/Form";
import ContainerForm from "@/app/components/ContainerForm";
import Title from "@/app/components/Title";
const addUser = () => {
  return (
    <ContainerForm>
      <Title text="You Can Add New User here" />
      <Form
        style={
          "flex flex-col items-center -300 justify-center w-[100%] md:flex-row"
        }
      />
    </ContainerForm>
  );
};

export default addUser;
