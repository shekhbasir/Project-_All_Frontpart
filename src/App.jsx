import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { useContext } from "react";
import Creatkar from "./context/Creatkar";
function App() {
  const { newdata } = useContext(Creatkar);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={newdata ? <Home /> : <Navigate to="/login"></Navigate>}
        ></Route>
        <Route
          path="/signup"
          element={newdata ? <Navigate to="/"></Navigate> : <Signup />}
        ></Route>
        <Route
          path="/login"
          element={newdata ? <Navigate to="/"></Navigate> : <Login />}
        ></Route>
      </Routes>
    </>
  );
}
export default App;

//now here i am going to use the conditinal rendering and using the data simplu
