import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/content");
  }

  return (
    <>
      Home - TODO
      <button onClick={handleNext}>
        Enter
      </button>
    </>
  );
}
export default Home;
