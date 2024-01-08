import React, { useState } from "react";
import { validate } from "../middleware/validation";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
// const SignupSchema = Yup.object().shape({
//   username: Yup.string()
//     .matches(/^[^\s]+$/, "Spaces are not allowed")
//     .test("no-spaces", "Spaces are not allowed", (value) => {
//       return value;
//     }),
// });

import { SignupSchema } from "../schema/SingupSchema";
const FormValidation = () => {
  const [handelGeneratePassword, setHandelGeneratePassword] = useState("");
  const [suceess, setSuccess] = useState(false);

  function generatePassword() {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*#?&";

    let password = "";
    do {
      password = Array.from({ length: 12 })
        .map(() =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .join("");
    } while (!regex.test(password));

    return setHandelGeneratePassword(password);
  }

  //*use formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      confrimPassword: "",
      checkRule: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setSuccess(true);
    },
  });

  return (
    <div>
      {/* with use formik */}
      {suceess &&
        formik.submitCount > 0 &&
        !Object.keys(formik.errors).length && (
          <p>ثبت نام شما موفقیت امیز بود</p>
        )}
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <input
          name="username"
          value={formik.username}
          onChange={formik.handleChange}
          type="text"
          placeholder="username"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        {/* cant use Field for useFormik */}
        {/* <Field name="username" /> */}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <input
          name="password"
          value={formik.password}
          onChange={formik.handleChange}
          type="text"
          placeholder="password"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <p>{handelGeneratePassword}</p>
        <button type="button" onClick={generatePassword}>
          پسورد سخت بسازید
        </button>
        {formik.errors.confrimPassword ? (
          <div>{formik.errors.confrimPassword}</div>
        ) : null}
        <input
          name="confrimPassword"
          value={formik.confrimPassword}
          onChange={formik.handleChange}
          type="text"
          placeholder="confrimPassword"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <input
          onChange={formik.handleChange}
          value={formik.email}
          name="email"
          type="text"
          placeholder="email"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        <input
          name="phone"
          value={formik.phone}
          onChange={formik.handleChange}
          type="text"
          placeholder="phone"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "15px",
          }}
        >
          {formik.errors.checkRule ? (
            <div>{formik.errors.checkRule}</div>
          ) : null}
          <input
            name="checkRule"
            checked={formik.checkRule}
            type="checkbox"
            onChange={formik.handleChange}
          ></input>
          <label htmlFor="">قوانین را بپذیرید</label>
        </div>
        <button style={{ padding: "15px", marginTop: "10px" }} type="submit">
          ثبت نام
        </button>
      </form>

      {/*********************************************************** WITH Yup */}
      {/* {suceess && <p>ثبت نام شما موفقیت امیز بود</p>} */}
      {/* <Formik
        initialValues={{
          username: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setSuccess(true);
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
          >
            {suceess && !Object.keys(errors).length && (
              <p>ثبت نام شما موفقیت امیز بود</p>
            )}
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <Field name="username" />
            <button
              style={{ padding: "15px", marginTop: "10px" }}
              type="submit"
            >
              ثبت نام
            </button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default FormValidation;
