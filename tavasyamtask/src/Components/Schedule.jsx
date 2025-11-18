import "./Schedule.css";
import StretchImg from "../assets/Images/Strech.png";
import BackStretchImg from "../assets/Images/Backstrech.png"; 
import YogaImg from "../assets/Images/Yoga.png";

export default function Schedule() {
  const items = [
    {
      day: "Monday",
      title: "Stretch",
      time: "At 08:00",
      tag: "20 Sets",
      image: StretchImg,
    },
    {
      day: "Tuesday",
      title: "Back Stretch",
      time: "At 08:00",
      tag: "10 Round",
      image: BackStretchImg,
    },
    {
      day: "Wednesday",
      title: "Yoga",
      time: "At 08:00",
      tag: "20 min",
      image: YogaImg,
    },
  ];

  return (
    <div className="schedule">
      <div className="header-row">
        <h3 className="title">My Schedule</h3>
        <a className="view-all" href="/">View All</a>
      </div>

      {items.map((item, i) => (
        <div className="schedule-card" key={i}>
          <h4 className="day">{item.day}</h4>

          <div className="content-row">
            <img src={item.image} alt="exercise pose" className="pose-img" />

            <div className="text-section">
              <p className="activity">{item.title}</p>
              <p className="time">{item.time}</p>
            </div>

            <div className="tag">{item.tag}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
