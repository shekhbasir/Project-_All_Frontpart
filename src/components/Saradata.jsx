//here i am goinng to finding the all data simply

import axios from "axios";
import { useEffect, useState } from "react";

function Saradata() {
  const [alldata, setalldata] = useState([]);

  const datapata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/auth/sabdetail", {
        withCredentials: true,
      });
      setalldata(res.data);
      console.log(alldata);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    datapata();
  }, []);

  return (
    <>
      <h2>this is All Data </h2>
     
    </>
  );
}
export default Saradata;
