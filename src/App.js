import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/hotel";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/hotels" element={<List />}></Route>
          <Route exact path="/hotels/:id" element={<Hotel />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
