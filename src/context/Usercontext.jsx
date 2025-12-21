import { useEffect, useState } from "react";
import Creatkar from "./Creatkar";
import axios from "axios";

function Usercontext({ children }) {
  const [newdata, setdata] = useState(null);

  useEffect(() => {
    const getalldata = async () => {
      try {
        const result = await axios.get("http://localhost:3000/auth/sabdetail", {
          withCredentials: true,
        });
        setdata(result.data);
      } catch (error) {
        console.log(error);
        setdata(null);
      }
    };
    getalldata();
  }, []);

  return (
    <>
      <Creatkar.Provider value={{ newdata, setdata }}>
        {children}
      </Creatkar.Provider>
    </>
  );
}
export default Usercontext;
