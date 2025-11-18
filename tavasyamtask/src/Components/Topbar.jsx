import "./Topbar.css";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="greetings">
        <p className="greetings1"> Good Morning</p>
        <h3 className="welcome">Welcome Back!</h3>
      </div>

      <div className="search-box">
        <FiSearch />
        <input type="text" placeholder="Search" />
      </div>

      <div className="top-icons">
        <FaBell  style={{color: "#475569"}}/>
        <IoSettingsSharp style={{color:"#475569"}} />

        <img
          src="https://i.pravatar.cc/40?img=32"
          className="avatar"
          alt=""
        />
      </div>
    </div>
  );
}
