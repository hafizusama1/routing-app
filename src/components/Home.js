import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
      <li>
        <Link to="/Careers">Careers</Link>
      </li>

      <button
        onClick={() => {
          //Any Logic which does the authentication
          navigate("/Home");
        }}
      ></button>
    </div>
  );
}

export default Home;
