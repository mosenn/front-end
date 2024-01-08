import { useState } from "react";

function App() {
  const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/g;
  const [value, setValue] = useState({
    email: "",
  });
  const [err, setError] = useState({});
  const [emailList, setEmailList] = useState([]);
  const handleOnChange = (emailInput) => {
    setError({ email: "" });
    setValue({
      ...value,
      [emailInput.target.name]: emailInput.target.value,
      id: Date.now(),
    });
    if (!emailRegex.test(emailInput.target.value)) {
      setError({ email: "email most be like this exmapel@gmail.com" });
      return;
    }
    const findEmail = emailList.find((userEmail) => {
      return userEmail.email === emailInput.target.value;
    });
    if (findEmail) {
      setError({ email: "این ایمیل قبلا ثبت شده" });
      return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(value.email)) {
      setError({ email: "exmapel@gmail.com ایمیل شما معتبر نیست" });
      return;
    }
    const findEmail = emailList.find((userEmail) => {
      return userEmail.email === value.email;
    });
    if (findEmail) {
      console.log("true");
      setError({ email: "این ایمیل قبلا ثبت شده" });
      return;
    }
    setEmailList([...emailList, value]);
    console.log(emailList);
    setValue({ email: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <form name="" action="" onSubmit={handleSubmit}>
        <p role="erroMessage">{err && err.email}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={value.email}
          onChange={handleOnChange}
        />
        <button className="primary" type="submit">
          set value
        </button>
      </form>
      <div role="grid">
        {emailList.map((user) => {
          return (
            <p key={user.id}>
              {user.email} , {user.id}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
