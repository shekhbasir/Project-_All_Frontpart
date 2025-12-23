import "./nav.css";
import navlogo from "../assets/navlogo.png";
import { Search, Bell, Users, House } from "lucide-react";
import pp from "../assets/pp.avif";
import { useContext, useState } from "react";
import Creatkar from "../context/Creatkar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Hamnav() {
  const [open, setOpen] = useState(false);

  const { newdata, setdata } = useContext(Creatkar);
  const hamarnavigate = useNavigate();

  //now i am going to calling thhe
  const logoutinghandle = async () => {
    try {
      const resultvalue = await axios.get("http://localhost:3000/auth/logout", {
        withCredentials: true,
      });
      setdata(null);
      hamarnavigate("/login");
      console.log(resultvalue);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mainnav">
        <div className="leftbar">
          <img src={navlogo} alt="CareerioX" className="imgsab" />
          <div className="formdiv">
            <form className="sbar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search..." className="inp2" />
            </form>
          </div>
        </div>
        <div className="rightbar">
          <div id="home1" className="rh1">
            <House />
            <span>Home</span>
          </div>
          <div id="netw" className="rh1">
            <Users />
            <span>Network</span>
          </div>
          <div id="notif" className="rh1">
            <Bell />
            <span>Notification</span>
          </div>
          <div id="profile1" className="rh1" style={{ position: "relative" }}>
            <img
              src={pp}
              alt="dp photo"
              className="dp1"
              onClick={() => setOpen(!open)}
            />

            {open && newdata && (
              <div className="profile-popup">
                <div className="part1">
                  <img
                    src={pp}
                    alt="dp photo"
                    className="dp1"
                    id="kam"
                    onClick={() => setOpen(!open)}
                  />
                  <p className="popp">
                    {newdata ?.hamardata?.firstname}{" "}
                    {newdata?.hamardata?.lastname}
                  </p>
                </div>

                <button className="vp1">View Profile</button>

                <div className="network">
                  <Users />
                  My Networks
                </div>

                <button className="signout" onClick={logoutinghandle}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Hamnav;
