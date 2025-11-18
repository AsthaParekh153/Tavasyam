import "./Sidebar.css";
import { FiGrid, FiHelpCircle, FiLogOut, FiChevronRight } from "react-icons/fi";

import WorkoutImg from "../assets/Images/Workoutbold.png";
import Workout from "../assets/Images/Workout.png";
import Dietplan from "../assets/Images/DietPlan.png";
import Goals from "../assets/Images/Goal.png";
import Schedule from "../assets/Images/Schedule.png";
import Progress from "../assets/Images/Progress.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <span className="logo-text">Fitness</span>

        <img src={WorkoutImg} alt="logo" className="logo-img" />
      </div>
      <div className="main-divider"></div>
      <ul className="menu">
        <li className="menu-item active">
          <FiGrid className="icon" />
          <span>Overview</span>
        </li>

        <li className="menu-item">
          <img src={Workout} className="menu-icon" />
          <span>Workout</span>
        </li>

        <li className="menu-item">
          <img src={Dietplan} className="menu-icon" />
          <span>Diet Plan</span>
        </li>

        <li className="menu-item">
          <img src={Goals} className="menu-icon" />
          <span>Goals</span>
        </li>

        <li className="menu-item">
          <img src={Schedule} className="menu-icon" />
          <span>My Schedule</span>
        </li>

        <li className="menu-item">
          <img src={Progress} className="menu-icon" />
          <span>Progress</span>
          <FiChevronRight className="arrow-icon" />
        </li>
      </ul>

      <div className="footer-links">
        <div className="footer-item">
          <FiHelpCircle /> <span>Help</span>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-item">
          <FiLogOut /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
