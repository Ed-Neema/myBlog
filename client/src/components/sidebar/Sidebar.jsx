import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      {/*  */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=frontend">
              Frontend
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=backend">
              Backend
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=awscloud">
              AWS Cloud
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=aiml">
              AI/ML
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=devops">
              DevOps
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="linkItem" to="/posts?cat=devrel">
              DevRel
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
