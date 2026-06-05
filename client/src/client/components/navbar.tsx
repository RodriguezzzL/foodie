import "../../styling/navbarStyles.css";

import foodieLogo from "../../styling/images/foodie.png";
import { useState } from "react";
const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <div className="navContainer">
        <a href="">
          {/* need to add link for logo */}
          <img src={foodieLogo} alt="foodie logo" className="logo" />
        </a>
        <ul className={menuStatus ? "listContainer active" : "listContainer"}>
          <li>Home</li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
        <button className="menu-btn" onClick={() => setMenuStatus(!menuStatus)}>
          ☰
        </button>
      </div>
    </>
  );
};

export default Navbar;
