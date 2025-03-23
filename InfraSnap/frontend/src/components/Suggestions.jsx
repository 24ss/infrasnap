import React from 'react';

export default function Suggestions({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-text">
      {items.map((it, i) => (
        <li key={i} className="bg-white p-4 rounded-md shadow-sm">
          {it.message}
        </li>
      ))}
    </ul>
  );
}
