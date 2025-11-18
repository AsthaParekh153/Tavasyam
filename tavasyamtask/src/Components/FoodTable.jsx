import "./FoodTable.css";
import burritoImg from "../assets/Images/Buritto.png";
import burgerImg from "../assets/Images/burger.png";

export default function FoodTable() {
  const items = [
    {
      food: "Burrito",
      meal: "Pizza Burger",
      calories: "Receiving",
      time: "01:00 AM",
      carbs: "20 gm",
      img: burritoImg,
    },
    {
      food: "Burger",
      meal: "Pizza Burger",
      calories: "Receiving",
      time: "01:00 AM",
      carbs: "20 gm",
      img: burgerImg,
    },
  ];

return (
<div className="food-table-container">
<div className="table-header">
<div>Food</div>
<div>Meal</div>
<div>Calories</div>
<div>Priorities</div>
<div>Carbs</div>
</div>


{items.map((item, i) => (
<div className="food-row" key={i}>
<div className="food-info">
<img src={item.img} alt={item.food} className="food-img" />
<span className="food-name">{item.food}</span>
</div>
<div className="meal">{item.meal}</div>
<div className="calories">{item.calories}</div>
<div className="time">{item.time}</div>
<div className="carbs">{item.carbs}</div>
</div>
))}
</div>
);
}