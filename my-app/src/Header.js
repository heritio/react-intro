import React from "react";
import './Header.css';

export default function Header(){
    return(
      <header className="position">
          <h1>
              Our Logo
          </h1>
          <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
          </ul>
      </header>
    );
}