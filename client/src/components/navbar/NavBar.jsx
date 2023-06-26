import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="linkItem" to={"/"}>
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="linkItem" to={"/about"}>
              ABOUT
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="linkItem" to={"/contact"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="linkItem" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="linkItem" to={"/write"}>
              {currentUser && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1006195/pexels-photo-1006195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="woman"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="linkItem" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="linkItem" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default NavBar;
