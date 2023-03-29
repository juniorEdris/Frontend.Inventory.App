import React from "react";
import { ChartHeading } from "../UI/Headings";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Total Inventory Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "product",
      data: labels.map(() => Math.random()),
      backgroundColor: "rgba(255, 99, 132, 0.5)", //"#2b8768"
    },
    {
      label: "quantity",
      data: labels.map(() => Math.random()),
      backgroundColor: "rgba(53, 162, 235, 0.5)", //"#1f604a"
    },
  ],
};
const InventoryBar = () => {
  return (
    <div className={`border border-primary min-h-[350px] rounded-md p-4`}>

        <ChartHeading>Total Inventory Chart</ChartHeading>
      <div className={`py-3`}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default InventoryBar;
