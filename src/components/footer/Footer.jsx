import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="socials">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
        <p>&copy; 2025 eslampizzaria.com</p>
      </div>
    </footer>
  );
}

export default Footer;
