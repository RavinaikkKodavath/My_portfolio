import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTube from "@material-ui/icons/YouTube";

import "../styles/Footer.css";
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://www.instagram.com/name_is_ravinaik/">
  <InstagramIcon /> /</Link>

  <Link href="https://youtube.com/@user-wz1zr2jt8x?si=LPnCzTM0u9eTrNKU">
  <YouTube />
  </Link>
     
        <Link href="https://www.facebook.com/profile.php?id=100074170324899&mibextid=LQQJ4d">
        <FacebookIcon />
  </Link> 

  <Link href="https://www.linkedin.com/in/kodavath-ravi-naik-a0a5b51a0/">
  <LinkedInIcon />
  </Link> 
      
      </div>
      <p> &copy; 2023 codewithravi.com</p>
    </div>
  );
}

export default Footer;
