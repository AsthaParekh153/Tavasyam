import "./Activitycard.css";
import Workout from "../assets/Images/Group.png";
import Calories from "../assets/Images/Calories.png";
import Step from "../assets/Images/Step.png";

export default function ActivityCards() {
  return (
    <div className="activity-wrapper">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-text">
          <h2 className="maintitle">Track Your Daily Activities</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod
          </p>
        </div>

        <div className="banner-img-wrapper">
          <img
            src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
            alt="girl stretching"
            className="banner-img"
          />
          <div className="img-overlay"></div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="cards-row">
        <div className="card blue">
          <img src={Workout} className="icons" />
          <div className="flex">
            <h3>Workout</h3>
            <span>4 hrs</span>
          </div>
        </div>

        <div className="card orange">
          <img src={Calories} className="icons" />
          <div className="flex">
            <h3>Calories</h3>
            <span>1800 kcal</span>
          </div>
        </div>

        <div className="card purple">
          <img src={Step} className="icons" />
          <div className="flex">
            <h3>Steps</h3>
            <span>2200 steps</span>
          </div>
        </div>
      </div>
    </div>
  );
}
