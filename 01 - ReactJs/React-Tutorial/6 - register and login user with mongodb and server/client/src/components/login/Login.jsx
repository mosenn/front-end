import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";
import { useGlobalContext } from "../../context/Context";

const Login = () => {
  const { setUserInfo } = useGlobalContext();
  const navigate = useNavigate();

  const [toast, setToast] = useState(false);
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const handleOnchangeLogin = (inputs) => {
    setLoginValue({
      ...loginValue,
      [inputs.target.name]: inputs.target.value,
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
    console.log("User data in Submit form", user);
    if (user?.status === 200) {
      //*Todo reidrect to Home page
      setToast(true);
      //* use globalState
      // localStorage.setItem("user", JSON.stringify(user?.data));
      setUserInfo(user?.data);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // console.log(registerError, "register in submit function");
  };
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
          login is sucess redirect be home page
        </div>
      )}
      <form
        action=""
        onSubmit={handleSubmitLogin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnchangeLogin}
          value={loginValue?.username}
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleOnchangeLogin}
          value={loginValue?.password}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "whitesmoke",
            marginTop: "10px",
          }}
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
