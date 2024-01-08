import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  About,
  AboutUs,
  NotFoundPAge,
  Detail,
  Product,
} from "./components";

// import Home from "./components/Home";
// import About from "./components/About";
// import Product from "./components/Product";
// import AboutUs from "./components/AboutUs";
// import NotFoundPAge from "./components/NotFoundPAge";
// import Detail from "./components/Detail";

function App() {
  return (
    <section>
      <BrowserRouter>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* nest route */}
          <Route path="/about" element={<About />}>
            <Route path="us" element={<AboutUs />} />
          </Route>
          {/* nest route */}
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFoundPAge />} />
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
