import "./Dashboard.css";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import ActivityCards from "../Components/Activitycard";
import ProgressChart from "../Components/Progresschart";
import Schedule from "../Components/Schedule";
import Goals from "../Components/Goals";
import FoodTable from "../Components/FoodTable";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="content">
          <div className="left">
            <ActivityCards />
            <ProgressChart />
            <FoodTable />
          </div>

          <div className="right">
            <Schedule />
            <Goals />
          </div>
        </div>
      </div>
    </div>
  );
}
