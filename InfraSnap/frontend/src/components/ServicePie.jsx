import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ServicePie({ data }) {
  // Tailwind-inspired colors: indigo, emerald, red
  const COLORS = ['#6366F1', '#10B981', '#EF4444'];

  return (
    <Pie
      data={{
        labels: data.map((d) => d.service),
        datasets: [
          {
            data: data.map((d) => d.total),
            backgroundColor: data.map((_, i) => COLORS[i % COLORS.length]),
            borderColor: '#FFFFFF',
            borderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
        },
      }}
      className="h-64"
    />
  );
}
