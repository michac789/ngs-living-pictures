import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const links = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Foreword",
      path: "/foreword"
    },
  ];

  return (
    <>
      Contents - TODO
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <button onClick={() => navigate(link.path)}>
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Content;
