"use client";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addUser } from "@/app/libs/users/addUser";
import { updateUser } from "@/app/libs/users/updateUser";
import { usePathname, useRouter } from "next/navigation";
import { Validation } from "./Validation";

type userIdProps = {
  userId?: string;
  style?: string;
  value?: inpValue;
};
type inpValue = {
  name: string;
  email: string;
  phone: string;
};

type errorMessageType = {
  empty: string;
};

type CombinedType = inpValue & errorMessageType;

export const Form = ({ userId, style, value }: userIdProps) => {
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    phone: "",
    email: "",
    empty: "",
  });
  const { name, email, phone } = value || {};

  // console.log(userId, "userId in form");
  const router = useRouter();
  const [user, setUser] = useState({
    name,
    email,
    phone,
  });
  const path = usePathname();

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const queryCL = useQueryClient();

  //  user add mutation
  const mutationAddUser = useMutation(addUser, {
    onSuccess: () => {
      queryCL.invalidateQueries("users");
      router.push("/");
    },
  });

  //user update  mutation
  const mutationUpdateUser = useMutation(updateUser, {
    onSuccess: async () => {
      await queryCL.invalidateQueries(["users"]);

      // navigate to home page
      if (path === `/update-user/${userId}`) {
        router.push("/");
      }
    },
  });

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation setup
    const errors = Validation(user as CombinedType);
    setErrorMessage(errors as CombinedType);

    if (Object.keys(errors).length === 0) {
      setErrorMessage({ email: "", empty: "", phone: "", name: "" });

      // set path for add and update user
      if (path === "/add-user") {
        mutationAddUser.mutate({
          ...user,
        } as inpValue);
      }
      if (path === `/update-user/${userId}` || path === "/") {
        mutationUpdateUser.mutate({
          ...(user as inpValue),
          id: userId as string,
        });
      }
    }
  };
  return (
    <section>
      {Object.values(errorMessage).map((err, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            <p>{err}</p>
          </div>
        );
      })}

      <form onSubmit={submitHandler} className={style}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={onchangeHandler}
          value={user.name}
          className=" m-2 p-2 rounded-md focus:outline-lime-600"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={onchangeHandler}
          value={user.email}
          className="  m-2 p-2 rounded-md focus:outline-lime-600"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          onChange={onchangeHandler}
          value={user.phone}
          className="m-2 p-2 rounded-md focus:outline-none focus:outline-lime-600"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded-md w-[170px] m-2 p-2 text-white"
        >
          {path === "/add-user" ? "add user" : "update user"}
        </button>
      </form>
    </section>
  );
};
