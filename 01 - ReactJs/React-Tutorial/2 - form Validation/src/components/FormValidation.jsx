import React, { useState } from "react";
import { validate } from "../middleware/validation";

const FormValidation = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confrimPassword: "",
    email: "",
    phone: "",
    checkRule: false,
  });
  const [error, setError] = useState({});
  const [handelGeneratePassword, setHandelGeneratePassword] = useState("");
  const [suceess, setSuccess] = useState(false);
  
  const handleOnchange = (inputs) => {
    const err = validate(values);
    setError(err);
    console.log(Object.keys(err).length);
    //* both do someting not diffrent
    setSuccess(Object.keys(err).length === 0 && true);
    if (inputs.target.name === "checkRule") {
      setValues({ ...values, [inputs.target.name]: inputs.target.checked });
      return;
    }
    //* both do someting not diffrent
    // setValues({ ...values, [inputs.target.name]: inputs.target.value });
    setValues((prev) => ({
      ...prev,
      [inputs.target.name]: inputs.target.value.trim(),
    }));

    //* both do someting not diffrent
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    const err = validate(values);
    setError(err);
    console.log(Object.keys(err).length);
    //* both do someting not diffrent
    setSuccess(Object.keys(err).length === 0 && true);
    // if (Object.keys(err).length === 0) {
    //   setSuccess(true);
    // }
    //* both do someting not diffrent
  };

  if (suceess) {
    console.log("true");
  }

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
  return (
    <div>
      {/* <p>{error.empty}</p>
      <p>{error.confrimPassword}</p>
      <p>{error.username}</p>
      <p>{error.checkRule}</p>
      <p>{error.password}</p>
      <p>{error.email}</p>
      <p>{error.phone}</p> */}
      {suceess && <p>ثبت نام شما موفقیت امیز بود</p>}
      {Object.values(error).map((error) => (
        <p key={error}>{error}</p>
      ))}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          name="username"
          value={values.username}
          onChange={handleOnchange}
          type="text"
          placeholder="username"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <input
          name="password"
          value={values.password}
          onChange={handleOnchange}
          type="text"
          placeholder="password"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <p>{handelGeneratePassword}</p>
        <button type="button" onClick={generatePassword}>
          پسورد سخت بسازید
        </button>
        <input
          name="confrimPassword"
          value={values.confrimPassword}
          onChange={handleOnchange}
          type="text"
          placeholder="confrimPassword"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <input
          onChange={handleOnchange}
          name="email"
          type="text"
          placeholder="email"
          style={{ padding: "5px", margin: "10px", fontSize: "15px" }}
        ></input>
        <input
          name="phone"
          value={values.phone}
          onChange={handleOnchange}
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
          <input
            name="checkRule"
            checked={values.checkRule}
            type="checkbox"
            onChange={handleOnchange}
          ></input>
          <label htmlFor="">قوانین را بپذیرید</label>
        </div>
        <button style={{ padding: "15px", marginTop: "10px" }} type="submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
