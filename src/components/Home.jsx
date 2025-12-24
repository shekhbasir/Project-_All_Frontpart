import Hamnav from "../sabcomponents/Hamnav";
import "./home.css";
import pp from "../assets/pp.avif";
import { Instagram, PencilLine } from "lucide-react";
import { useState } from "react";
import Edit from "../sabcomponents/Edit";

function Home() {
  const [goedit, setedit] = useState(false);

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
              <h5>Birgunj Nepal</h5>

              <div className="ed1">
                <button className="ed2" onClick={() => setedit(true)}>
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

      {/* ✅ MODAL OPEN HERE (Home page ke upar) */}
      {goedit && <Edit closeEdit={() => setedit(false)} />}
    </>
  );
}

export default Home;
