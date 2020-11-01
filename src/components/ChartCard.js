import TwoLevelPieChart from "./charts/PieChartComponent";
import colors from "../config/color-palette";
import "./card.css"

function ChartCard({ data }) {
  const chartData = [
    { name: "Confirmed", value: data.TotalConfirmed },
    { name: "Recovered", value: data.TotalRecovered },
    { name: "Deceased", value: data.TotalDeaths },
  ];

  return (
    <div className="d-flex card">
      <div className="w-50">
        <p className="card-title">World Statistics</p>
        <p className="card-subtitle">Total Patients</p>
        <p className="card-title">{data.TotalConfirmed}</p>
        <hr />
        <div>
          {colors.map((color, index) => (
            <div className="d-flex" style={{margin:"8px 0"}}>
              <div class="color-box" style={{ backgroundColor:color }} />
              <p>{chartData[index].name}</p>
            </div>
          ))}
        </div>
      </div>
      <TwoLevelPieChart data={chartData} />
    </div>
  );
}

export default ChartCard;
