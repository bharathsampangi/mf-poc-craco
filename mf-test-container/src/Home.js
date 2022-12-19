import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      HOME component
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/mftest"}>Remote</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
