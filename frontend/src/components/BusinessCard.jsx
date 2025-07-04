export default function BusinessCard({ data, onRegenerate, loading }) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-xl border border-gray-200">
      <div className="text-center space-y-2">
        <p className="text-2xl font-bold text-yellow-600">⭐ {data.rating}</p>
        <p className="text-gray-700 font-medium">Reviews: {data.reviews}</p>
        <p className="text-lg italic text-gray-800 mt-4">“{data.headline}”</p>
        <button
          onClick={onRegenerate}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all duration-200"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Regenerate SEO Headline'}
        </button>
      </div>
    </div>
  );
}
