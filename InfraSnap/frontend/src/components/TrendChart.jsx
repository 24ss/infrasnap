import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function TrendChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map((d) => d.period),
        datasets: [{ label: 'Cost', data: data.map((d) => d.total), fill: true }],
      }}
      options={{ responsive: true, maintainAspectRatio: false }}
      className="h-64"
    />
  );
}
