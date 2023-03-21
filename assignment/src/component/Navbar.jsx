import React, { useEffect } from "react";
import "../App.css";
const logo =
  "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png";

const Navbar = ({ triggerData }) => {
  // Using some navbar effects here
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const onScroll = (event) => {
      const scrollPosition = event.target.scrollingElement.scrollTop;
      nav.classList.toggle("scrolled-down", scrollPosition > 66);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <>
      <nav id="nav" className="navbar container">
        <img src={logo} alt="AppleLogo" />
        <button onClick={triggerData} className="get-users-btn">
          Get Users
        </button>
      </nav>
    </>
  );
};

export default Navbar;
