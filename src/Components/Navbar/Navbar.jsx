import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
  <div>
    Hello
    <nav className="navbar navbar-expand-lg  my-nav "data-bs-theme="dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/form">
                Form
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
  )
};

export default Navbar;