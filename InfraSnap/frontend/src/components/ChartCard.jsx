import React from 'react';

export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-medium mb-4 text-secondary">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
