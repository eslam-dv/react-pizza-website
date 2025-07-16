import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import Logo from "../../assets/pizzaLogo.png";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <div className="left-side">
          <img src={Logo} />
        </div>
        <div className="right-side">
          <button onClick={() => setVisible(!visible)}>
            <MenuIcon className="menu-icon" />
          </button>
          <nav className={visible ? "open" : ""}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
