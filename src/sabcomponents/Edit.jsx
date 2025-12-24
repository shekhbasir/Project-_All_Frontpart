import { useContext, useState } from "react";
import "./bas.css";
import { X } from "lucide-react";
import Creatkar from "../context/Creatkar";
import axios from "axios";

function Edit({ closeEdit }) {
  const { newdata, setdata } = useContext(Creatkar);

  const [firstname, setfirstname] = useState(
    newdata?.hamardata?.firstname || ""
  );
  const [lastname, setlastname] = useState(newdata?.hamardata?.lastname || "");
  const [username, setusername] = useState(newdata?.hamardata?.username || "");
  const [heading, setheading] = useState(newdata?.hamardata?.heading || "");
  const [location, setlocation] = useState(newdata?.hamardata?.location || "");
  const [gender, setgender] = useState(newdata?.hamardata?.gender || "");

  const [profileimg, setprofileimg] = useState(
    newdata?.hamardata?.profileimg || ""
  );
  const [preview, setpreview] = useState(profileimg);

  // IMAGE UPLOAD
  const imagehandle = async (e) => {
    const file = e.target.files[0];
    setpreview(URL.createObjectURL(file));

    const formdata = new FormData();
    formdata.append("image", file);

    const res = await axios.post(
      "http://localhost:3000/auth/upload",
      formdata,
      { withCredentials: true }
    );

    setprofileimg(res.data.image);
  };

  // SAVE PROFILE
  const savehandle = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      "http://localhost:3000/auth/updateprofile",
      {
        firstname,
        lastname,
        username,
        heading,
        location,
        gender,
        profileimg,
      },
      { withCredentials: true }
    );

    setdata(res.data);
    closeEdit();
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <span className="closeBtn" onClick={closeEdit}>
          <X />
        </span>

        <div className="cover">
          <img
            src={preview || "/default.jpg"}
            alt="profile"
            className="editimg"
          />
          <input type="file" onChange={imagehandle} />
        </div>

        <form className="realform" onSubmit={savehandle}>
          <input
            className="bas2"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="First name"
          />
          <input
            className="bas2"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="Last name"
          />
          <input
            className="bas2"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="bas2"
            value={heading}
            onChange={(e) => setheading(e.target.value)}
            placeholder="Headline"
          />
          <input
            className="bas2"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            placeholder="Location"
          />
          <input
            className="bas2"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            placeholder="Gender"
          />

          <button className="bt1">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
