import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item active">
            <a className="nav-link" href="#">            
              <Link to='/' > 
                Home
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to='/register' > 
                Register
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
