import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Careers() {
  return (
    <div>
      <Link to="/careers/openings">
        <span>Go to Openings</span>
      </Link>
      <Routes>
        <Route path="/careers/openings" element={<></>} />
      </Routes>
    </div>
  );
}

export default Careers;
