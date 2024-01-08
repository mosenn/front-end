import { useState } from "react";
import "./App.css";
import UseForm from "./components/UseForm";
import UserList from "./components/UserList";
function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <UseForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </>
  );
}

export default App;
