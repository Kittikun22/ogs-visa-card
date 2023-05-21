import { Routes, Route } from "react-router-dom";
import "./App.css";
import Visa1 from "./components/Visa1";
import Visa2 from "./components/Visa2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Visa1 />} />
      <Route path="/Visa2" element={<Visa2 />} />
    </Routes>
  );
}

export default App;
