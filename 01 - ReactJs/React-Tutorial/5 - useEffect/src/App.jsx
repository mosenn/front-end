import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./componenet/Home";
import Detail from "./componenet/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
