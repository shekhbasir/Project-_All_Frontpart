import React, { useContext } from "react";
import Creatkar from "../context/Creatkar";

function Home() {
  const { newdata } = useContext(Creatkar);

  if (!newdata) return <p>Loading...</p>;

  return (
    <div>
      <h1>This is all data:</h1>
      <pre>{JSON.stringify(newdata, null, 2)}</pre>
    </div>
  );
}

export default Home;
