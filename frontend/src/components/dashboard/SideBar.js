import React from "react";
import "./SideBar.css";
import {
  FaHome,
  FaChartLine,
  FaWallet,
  FaExchangeAlt,
  FaEnvelope,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import ProfilePicture from "../Asserts/ProfilePicture.jpg";
// import LogoIcon from "../Asserts/ProfilePicture.jpg";

function SideBar() {
  return (
    <aside className="sidebar">
      {/* <div className="logo">
        <img src={LogoIcon} alt="Web App" className="logo-icon" />
        <h1>BudgetBliss</h1>
      </div> */}
      <div className="profile">
        <img src={ProfilePicture} alt="User" className="profile-img" />
        <p>Welcome Back</p>
        <h3>Nur Alam</h3>
      </div>
      <ul className="menu">
        <li>
          <FaHome className="icon" /> Dashboard
        </li>
        <li>
          <FaChartLine className="icon" /> Statistics
        </li>
        <li>
          <FaWallet className="icon" /> My Wallet
        </li>
        <li>
          <FaExchangeAlt className="icon" /> Transfer
        </li>
        <li>
          <FaEnvelope className="icon" /> Message
        </li>
        <li>
          <FaHeart className="icon" /> Favorite
        </li>
        <li>
          <FaUser className="icon" /> Profile
        </li>
      </ul>
      <button className="logout">Logout</button>
    </aside>
  );
}

export default SideBar;
