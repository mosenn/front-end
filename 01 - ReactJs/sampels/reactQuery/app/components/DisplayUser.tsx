"use client";

import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";

import { deleteUser } from "../libs/users/deleteUser";
import { Form } from "./form/Form";
import LinkContainer from "./LinkContainer";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { BiLastPage } from "react-icons/bi";

type propsTypes = {
  name: string;
  email: string;
  phone: string;
  id: string;
};
const DisplayUser = ({ name, email, phone, id }: propsTypes) => {
  const [formActive, setFormActive] = useState(false);

  const queryCl = useQueryClient();

  const mutiationDel = useMutation(deleteUser, {
    onSuccess: () => {
      queryCl.invalidateQueries("users");
    },
  });
  const value = { name, email, phone };

  return (
    <section className="border  border-gray-300 rounded-lg  shadow-inner   shadow-[#d4d6f5aa] my-2 md:mx-2 ">
      <div className=" flex flex-col   ">
        <section className="p-2">
          <p className="my-1">name : {name}</p>
          <p className="my-1">email : {email}</p>
          <p className="my-1">phone : {phone}</p>
        </section>
        <section className=" p-2  flex justify-start  md:flex-row md:gap-3 ">
          <button
            onClick={(e) => {
              mutiationDel.mutate(id);
            }}
          >
            <AiFillDelete
              size={25}
              fill={"#f47e7e"}
              title="delete user"
              className="hover:hover:fill-red-900"
            />
          </button>

          <button
            className="mx-3 md:mx-0"
            onClick={() => {
              setFormActive(!formActive);
            }}
          >
            {formActive ? (
              <AiOutlineClose
                fill={"#badbba"}
                size={25}
                title="close edit"
                className="hover:fill-green-700"
              />
            ) : (
              <AiFillEdit
                fill={"#98be98"}
                size={25}
                title="edit user here"
                className="hover:fill-green-700"
              />
            )}
          </button>

          <button className="flex items-center">
            <LinkContainer
              sizeText="sm"
              address={`update-user/${id}`}
              text="update page"
              icon={<BiLastPage size={25} />}
              title="go to update page"
            />
          </button>
        </section>
      </div>

      {formActive && (
        <Form
          userId={id}
          value={value}
          style={`my-3  flex flex-col w-[100%] -300`}
        />
      )}
    </section>
  );
};

export default DisplayUser;
