import Hamnav from "../sabcomponents/Hamnav";
import "./home.css";
import pp from "../assets/pp.avif";
import Creatkar from "../context/Creatkar";
import { Plus, Instagram, PencilLine } from "lucide-react";
function Home() {
  return (
    <>
      <div className="mainhome">
        <Hamnav />
        <div className="mainkam">
          <div className="leftmain">
            <div className="bgp">
              <Instagram className="inst1" />
            </div>
            <div className="profileWrap">
              <img src={pp} alt="bgcphoto" className="bgp1" />
              <h2>Sheikh Basir</h2>
              <h4>Mern Stack</h4>
              <h5>Birgunj Nepal</h5> <br />
              <div className="ed1">
                <button className="ed2">
                  Edit Profile
                  <PencilLine style={{ height: 20 }} />
                </button>
              </div>
            </div>
          </div>

          <div className="midmain"></div>
          <div className="rightmain"></div>
        </div>
      </div>
    </>
  );
}
export default Home;
//now i am going to writing the code for making the project for the frontend setup to save thhe photo and the vedio

//now i am going to making our fetching the relivent information so for this
