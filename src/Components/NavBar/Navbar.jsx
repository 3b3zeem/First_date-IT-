import React, { useEffect, useState } from "react";
import "./Navbar.scoped.css";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";

import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import authService from "../../Service/auth-service";

const Navbar = ({ cart = [] }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, settransparent] = useState("header");
  const adding = () => {
    if (window.scrollY >= 10) {
      settransparent("header activeNavHeader");
    } else {
      settransparent("header ");
    }
  };
  window.addEventListener("scroll", adding);

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    authService.Logout();
  };

  return (
    <section className="app">
      <div className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className="flex">
              <BiLogoMediumOld className="icon menuIcon" />
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link to="/advertisements" className="navLink">
                Advertisements
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                contact
              </Link>
            </li>

            {currentUser && (
              <div className="d-flex flex-row">
                <li className="navItem">
                  <Link to="/Company" className="navLink">
                    Company
                  </Link>
                </li>
              </div>
            )}
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon menuIcon" />
          </div>
        </div>
        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item d-flex flex-row alight-item-center">
              <div>
                <Link to={'/userProfile'}>Welcome {currentUser.firstName}</Link>
              </div>
              <div>
                <a href="/" onClick={logout} className="nav-link">
                  Logout
                </a>
              </div>
            </li>
          </div>
        ) : (
          <div className="headerBtns flex">
            {/* <div className="headerBtns flex">
              <CiHeart className="icon" />
            </div> */}
            <button className="btn loginBtn">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
        <button className="darkMode" onClick={switchTheme}>
          {theme === "light" ? <BsFillMoonStarsFill /> : <IoMdSunny />}
        </button>
        <div onClick={showNav} className="togglrNavbar">
          <PiDotsNineBold className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
