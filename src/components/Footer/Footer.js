import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/pranikz" target="__blank">
          Pratyush Mahapatra
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.github.com/pranikz" target="__blank">
        <i class="fab fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/pranikz" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://pranikz.ml/" target="__blank">
        <i class="fa fa-globe fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;