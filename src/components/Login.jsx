//now i am going to design the login page and fata fat conecting with the backend and then  maja aai

import "./sign.css";
import mainlogo from "../assets/mainlog.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
function Login() {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="sabmain">
        <div className="imgkam">
          <img src={mainlogo} alt="componey logoo" className="imgs1" />
        </div>
        <div className="formkam">
          <div className="formkam1">
            <p className="p1kam">Login</p>
            <form action="" className="mainform">
              <input
                type="email"
                name="email"
                id="allinp"
                placeholder="Email"
              />
              <div className="sam1">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="allinp"
                  placeholder="PassWord"
                />
                <span className="ham1" onClick={() => setshow((prev) => !prev)}>
                  {show ? <EyeOff /> : <Eye />}
                </span>
              </div>

              <input type="submit" value={"SignUp"} className="sab1" />
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
