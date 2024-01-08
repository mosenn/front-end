import { useState } from "react";
import "./register.css";
import { RegisterUser, uploadImage } from "../../api/user";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState({});
  const [toast, setToast] = useState(false);
  const [btnDisbale, setDisbale] = useState(false);
  const [registerValue, setRegisterValue] = useState({
    username: "",
    passowrd: "",
    confirmPassword: "",
    pic: {},
  });

  const handleOnchangeRegister = (inputs) => {
    if (inputs.target.name === "pic") {
      const file = inputs.target.files[0];
      console.log(file, "in onchange");
      if (file) {
        setRegisterValue({ ...registerValue, pic: file });
      }
    } else {
      setRegisterValue({
        ...registerValue,
        [inputs.target.name]: inputs.target.value,
      });
    }

    console.log(registerValue, "registervalue in onchange");
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const user = await RegisterUser(registerValue);
    setRegisterError(user?.response?.data);
    console.log("User data in Submit form", user);
    if (user?.status === 201 && user?.data) {
      //*Todo reidrect to login page
      setToast(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    // console.log(registerError, "register in submit function");
  };
  // console.log(registerError, "register error out of function");
  console.log(registerValue.pic, "registerValue.pic");

  const upload = async () => {
    const response = await uploadImage(registerValue.pic);
    console.log("response upload pic in submit func", response);
    setDisbale(true);
    console.log(btnDisbale, "btn disbale");
    if (response.status === 200) {
      //*set toast ,
      setTimeout(() => {
        setDisbale(false);
      }, 3000);
      setRegisterValue({ ...registerValue, pic: response.data.secure_url });
    }
  };
  console.log(registerValue);

  return (
    <div>
      {toast && (
        <div
          style={{
            backgroundColor: "green",
            padding: "12px",
            color: "black",
            textAlign: "center",
          }}
        >
          register is sucess redirect be soon to login
        </div>
      )}

      <form
        action=""
        onSubmit={handleSubmitRegister}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="username">username</label>
        {registerError?.username && <p>{registerError?.username}</p>}
        <input
          onChange={handleOnchangeRegister}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">password</label>
        {registerError?.password && <p>{registerError?.password}</p>}
        <input onChange={handleOnchangeRegister} type="text" name="password" />

        <label htmlFor="confirmPassword">confirm password</label>

        {registerError?.confirmPassword && (
          <p>{registerError?.confirmPassword}</p>
        )}

        <input
          onChange={handleOnchangeRegister}
          type="text"
          name="confirmPassword"
        />

        <label htmlFor="pic">upload your profile pic</label>

        <input onChange={handleOnchangeRegister} type="file" name="pic" />
        <button type="button" onClick={upload}>
          upload img
        </button>
        <button
          className="submitBtn"
          disabled={btnDisbale ? true : false}
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "whitesmoke",
            marginTop: "10px",
          }}
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
