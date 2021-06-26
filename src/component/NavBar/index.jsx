import "./style.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width >= 768) {
      setOpen(true);
    }
  };

  // function to close tabs when clicked on small devices
  const handleClose = () => {
    if (screenWidth < 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => {
      window.removeEventListener("resize", trackScreenWidth);
    };
  }, []);
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/DwinaTech-brand.png`}
              alt="brand"
            />
          </div>
          <div className="list-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/menu-bars.png`}
              width="70"
              height="100"
              alt="menu bars"
              style={{ opacity: !open ? "1" : "0" }}
              onClick={() => {
                setOpen(!open);
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/cross-menu-icon.png`}
              width="70"
              height="100"
              alt="menu cross"
              style={{ opacity: open ? "1" : "0" }}
              onClick={() => {
                setOpen(!open);
              }}
            />
            <ul style={{ left: open ? "0" : "-100vw" }}>
              <li>
                <Link
                  onClick={handleClose}
                  style={{ color: location.pathname === "/" && "#4071f4" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  style={{ color: location.pathname === "/about" && "#4071f4" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  style={{
                    color: location.pathname === "/skills" && "#4071f4",
                  }}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  style={{ color: location.pathname === "/works" && "#4071f4" }}
                  to="/works"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  style={{
                    color: location.pathname === "/contact" && "#4071f4",
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
