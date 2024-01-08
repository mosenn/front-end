import axios from "axios";
const url = "http://localhost:2023/user";
// axios.defaults.withCredentials = true;
type loginParam = {
  email: string;
  password: string;
  confirmPassword: string;
};
export const login = async ({ email, password }: loginParam) => {

  const user = await axios.post(
    `${url}/login`,
    { email, password },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );

  localStorage.setItem("token", JSON.stringify(user.data.data.token));

  console.log("user is login data", { data: user.data.data.token });
  return user;
};
