import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Saradata from "./components/Saradata";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Saradata" element={<Saradata />}></Route>
      </Routes>
    </>
  );
}
export default App;
