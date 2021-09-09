import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { SidebarData } from "./SidebarData";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <React.Fragment>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <div>
            <div className="bottom-upgrade card text-center">
              <h6 className="mt-4">Upgrade to pro</h6>
              <p>
                Read more <i className="fas fa-angle-right"></i>
              </p>
            </div>
            <p>
              <i className="mt-3 fas fa-sign-out-alt mr-3 mt-2 text-center"></i>Logout
            </p>
          </div>
        </nav>
      </React.Fragment>
    </>
  );
}

export default Sidebar;
