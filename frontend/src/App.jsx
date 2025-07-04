import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import './App.css';
export default function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [headlineLoading, setHeadlineLoading] = useState(false);

  const handleFormSubmit = async ({ name, location }) => {
    setLoading(true);
    const res = await fetch('/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    setBusinessData({ ...data, name, location });
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setHeadlineLoading(true);
    const res = await fetch(
      `/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
    );
    const data = await res.json();
    setBusinessData({ ...businessData, headline: data.headline });
    setHeadlineLoading(false);
  };

  return (
    <div className="page-container">
  <div className="card-container">
    <h1 className="heading-title">🚀 Local Business Dashboard</h1>
    <BusinessForm onSubmit={handleFormSubmit} loading={loading} />
    {businessData && (
      <BusinessCard
        data={businessData}
        onRegenerate={regenerateHeadline}
        loading={headlineLoading}
      />
    )}
  </div>
</div>

  );
}
