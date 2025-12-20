import "./sign.css";
import mainlogo from "../assets/mainlog.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [show, setshow] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterror] = useState("");
  const [loading, setloading] = useState(false);

  const hamanvigate = useNavigate();

  const Handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post("http://localhost:3000/auth/signup", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      setfirstname("");
      setlastname("");
      setusername("");
      setemail("");
      setpassword("");
      seterror("");
      hamanvigate("/login");
      console.log(res);
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
            <p className="p1kam">SignUp</p>

            {err && <p className="err1">{err}</p>}
            <form onSubmit={Handlesubmit} className="mainform">
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                id="allinp"
                placeholder="FirstName"
                required
              />
              <input
                type="text"
                name="lastname"
                id="allinp"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                placeholder="LastName"
                required
              />
              <input
                type="text"
                name="username"
                id="allinp"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="UserName"
                required
              />
              <input
                type="email"
                name="email"
                id="allinp"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                required
              />
              <div className="sam1">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="allinp"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  placeholder="PassWord"
                />
                <span className="ham1" onClick={() => setshow((prev) => !prev)}>
                  {show ? <EyeOff /> : <Eye />}
                </span>
              </div>

              <input
                type="submit"
                value={loading ? "loading.." : "SignUp"}
                className="sab1"
                disabled={loading}
              />
            </form>

            <div className="kam1">
              {" "}
              <p>Already an Account</p>?{" "}
              <span className="log1">
                <Link to="/login" className="lam">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;

//this is the simple code here and it is working
//after succesfully loading i am direcly going to sending the data there
//now i am going to working with the login page as much similar
