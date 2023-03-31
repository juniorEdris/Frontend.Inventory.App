import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartHeading } from "../UI/Headings";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const StatisticalReportGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Total sales summary", // titleText
      },
    },
  };

  const labels = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sale", // dataLabel
        data: labels.map(() => Math.random()),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className={`border border-primary min-h-[350px] rounded-md p-4`}>
      <ChartHeading className="text-lg ">Consuming product per day</ChartHeading>

      <div className={`py-3`}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default StatisticalReportGraph;
