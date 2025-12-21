//now i am going to design the login page and fata fat conecting with the backend and then  maja aai

import "./sign.css";
import mainlogo from "../assets/mainlog.png";
import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Creatkar from "../context/Creatkar";

function Login() {
  const [show, setshow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const hamarnavigate = useNavigate();
  const { setdata } = useContext(Creatkar);
  //here writing for handling this
  const Hamarhandle = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setdata({
        hamardata: res.data.hamardata,
      });
      setemail("");
      setpassword("");
      seterror("");
      hamarnavigate("/");

      console.log(res.data);
    } catch (error) {
      seterror(error.response.data.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="sabmain">
        <div className="imgkam">
          <img src={mainlogo} alt="componey logoo" className="imgs1" />
        </div>
        <div className="formkam">
          <div className="formkam1">
            <p className="p1kam">Login</p>
            {err && <p className="jan">{err}</p>}
            <form onSubmit={Hamarhandle} className="mainform">
              <input
                type="email"
                name="email"
                id="allinp"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
              />
              <div className="sam1">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="allinp"
                  value={password}
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="PassWord"
                />
                <span className="ham1" onClick={() => setshow((prev) => !prev)}>
                  {show ? <EyeOff /> : <Eye />}
                </span>
              </div>

              <input
                type="submit"
                value={loading ? "Loading..." : "Login"}
                className="sab1"
              />
            </form>
            <div className="kam1">
              {" "}
              <p>don't have an Account</p>?{" "}
              <span className="log1">
                <Link to="/signup" className="lam">
                  SignUp
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
