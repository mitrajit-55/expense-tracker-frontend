import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>© {new Date().getFullYear()} SpendSense | Created by Mitrajit Ghosh</h4>
      </div>
      
    </footer>
  );
}

export default Footer;
