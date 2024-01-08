import axios from "axios";

const url = "http://localhost:2023/user";
// axios.defaults.withCredentials = true;

export const userIsLogin = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as any);
    console.log(token, "this token");
    if (token) {
      const user = await axios.get(`${url}/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true, // Include this line to send the cookie
      });
      console.log("this user is login", { user });
      return user;
    }
  } catch (err) {
    console.log(err);
  }
};
