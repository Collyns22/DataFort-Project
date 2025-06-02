import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  Title
);

const ChartComponent = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Stock in",
        backgroundColor: "rgba(75,192,192,0.7)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Stock out",
        backgroundColor: "rgba(153,102,255,0.7)",
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64 ">
      <h1>Stock report</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
