import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import ChartCard from '../components/ChartCard';
import ServicePie from '../components/ServicePie';
import TrendChart from '../components/TrendChart';
import Suggestions from '../components/Suggestions';

export default function Dashboard() {
  const { services, trends, suggestions, fetchAll } = useStore();

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6 text-primary">InfraSnap Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Cost by Service">
          <ServicePie data={services} />
        </ChartCard>
        <ChartCard title="Spending Trends">
          <TrendChart data={trends} />
        </ChartCard>
      </div>
      <div className="mt-8">
        <ChartCard title="Optimization Tips">
          <Suggestions items={suggestions} />
        </ChartCard>
      </div>
    </div>
  );
}
