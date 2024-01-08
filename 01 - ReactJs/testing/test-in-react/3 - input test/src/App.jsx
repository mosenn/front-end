import { useState } from "react";

function App() {
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue([...value, e.target[0].value]);
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
        <input required type="text" value={value} />
        <button className="primary" type="submit">
          set value
        </button>
      </form>
      <div role="grid">
        {value.map((val) => {
          return <p role="paragraph" key={val}>{val}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
