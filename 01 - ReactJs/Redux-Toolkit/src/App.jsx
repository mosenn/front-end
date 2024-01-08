import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { Test } from "./Componets/Test";
import {Log} from './slice/dataSlice'
function App() {
  const [count, Setcount] = useState();

  const dispatch = useDispatch();
  console.log(Log);

  return (
    <div className="App">
      <Test />
      <button
        onClick={() => {
          dispatch(Log());
        }}
      >
        Click For Show Log Function in the console
      </button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
