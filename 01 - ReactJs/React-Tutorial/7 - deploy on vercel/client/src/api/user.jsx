import axios from "axios";


const baseUrl = (axios.defaults.baseURL = "https://serverlogin.vercel.app");



axios.defaults.withCredentials = true;

//* register api user
export const RegisterUser = async (UserRegisterData) => {
  console.log(UserRegisterData, "values");
  // const { username, password, confirmPassword, pic } = UserRegisterData;
  // console.log(
  //   username,
  //   password,
  //   confirmPassword,
  //   pic,
  //   "input values in api function"
  // );
  try {
    const user = await axios.post(
      `${baseUrl}/register`,
      UserRegisterData,

      {
        method: "post",
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(user);
    // const response = user.data;
    // console.log(response);
    return user;
  } catch (err) {
    console.log("🚀 ~ file: user.jsx:32 ~ RegisterUser ~ err:", err);
    return err;
  }
};

//* login api user
export const loginUser = async (userLoginValue) => {
  const { username, password } = userLoginValue;
  try {
    const user = await axios.post(
      `${baseUrl}/login`,
      {
        username,
        password,
      },
      { method: "post", headers: { "Content-Type": "application/json" } }
    );
    console.log("User in api function", user);

    return user;
  } catch (err) {
    console.log(err);
  }
};

// *profile user

export const profileUser = async () => {
  try {
    const user = axios.get(`${baseUrl}/profile`);
    return user;
  } catch (err) {
    return err;
  }
};

export const logoutUSer = async () => {
  try {
    const user = await axios.post(`${baseUrl}/logout`);
    return user;
  } catch (err) {
    return err;
  }
};
//* UPLOAD  PIC
// uHwfXhAdoB
//* Upload pic For Profile Image
const CLOUDNAME = import.meta.env.VITE_CLOUDINARAY_CLOUDNAME;
console.log(`🚀  file: users.tsx:32  CLOUDNAME:`, CLOUDNAME);
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARAY_UPLOAD_PRESET;
console.log(`🚀  file: users.tsx:33  UPLOAD_PRESET:`, UPLOAD_PRESET);
const cloudinaryApi = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;
//  TODO  Refactor to Global function uploadRegisterImage and rename to uploadImage
export const uploadImage = async (pic) => {
  console.log(pic, "pic in upload register image api func");
  try {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUDNAME);
    const response = await axios.post(cloudinaryApi, data, {
      withCredentials: false,
    });
    console.log(response, "response");
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

//* Upload pic For Profile Image
