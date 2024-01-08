import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(true);

  const handleMessage = () => {
    setShowMessage(!showMessage);
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
      <h1 role="Hellow">Hello react</h1>
      <p role="vitest">this test text with vitest</p>
      <button onClick={handleMessage}>Change Message</button>
      <p role="showMessage"> {showMessage ? " hi ✌" : " bye 👀"}</p>
    </div>
  );
}

export default App;
