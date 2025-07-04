import { useState } from 'react';

export default function BusinessForm({ onSubmit, loading }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && location.trim()) {
      onSubmit({ name, location });
    } else {
      alert('Both fields are required.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Business Name"
    className="form-input"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Location"
    className="form-input"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
  <button
    type="submit"
    className="submit-button"
    disabled={loading}
  >
    {loading ? 'Loading...' : 'Submit'}
  </button>
</form>

  );
}

