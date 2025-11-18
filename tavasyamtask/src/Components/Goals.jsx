import "./Goals.css";
import promoImg from "../assets/Images/pic.png";   

export default function Goals() {
  const goals = [
    {
      title: "ABS & Stretch",
      time: "Saturday, April 14 | 08:00 AM",
      tag: "30 Min/day",
    },
    {
      title: "Push Up",
      time: "Sunday, April 15 | 08:00 AM",
      tag: "50 Sets/day",
    },
  ];

  return (
    <div className="goals">
      <div className="header-row">
        <h3>Goals</h3>
        <a className="view-all" href="/">
          View All
        </a>
      </div>

      {goals.map((g, i) => (
        <div className="goal-card" key={i}>
          <div className="goal-info">
            <h5>{g.title}</h5>
            <p>{g.time}</p>
          </div>
          <div className="tag">{g.tag}</div>
        </div>
      ))}

      {/* Purple Promotion Box */}
      <div className="promo-card">
        <div className="promo-text">
          <h4 className="promotion-txt">50% off on Premium Membership</h4>
          <p className="promo-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
          </p>
          <button className="upgrade-btn">Upgrade</button>
        </div>

        <div className="promo-img">
          <img src={promoImg} alt="fitness models" className="fitness" />
        </div>
      </div>
    </div>
  );
}
