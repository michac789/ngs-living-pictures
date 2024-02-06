import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/content");
  }

  return (
    <div>
      <h3>
        Home - TODO
      </h3>
      <button onClick={handleNext}>
        Enter
      </button>
    </div>
  );
}
export default Home;
