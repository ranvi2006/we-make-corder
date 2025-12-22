import { useEffect, useState } from "react";

export default function AdminCounseling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || window.location.origin;

  useEffect(() => {
    const endpoint = `${API_URL}/api/counseling/all`;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load counseling data:", err);
        setError(err.message || "Failed to load data");
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) return <div className="container">Loading counseling requests...</div>;

  if (error) return <div className="container">Error loading data: {error}</div>;

  return (
    <div className="container">
      <h2>Counseling Requests</h2>

      {data.length === 0 && <p>No requests yet.</p>}

      {data.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <strong>{item.name}</strong> ({item.email})<br />
          <strong>Goal:</strong> {item.goal}<br />
          {item.message && (
            <>
              <strong>Message:</strong> {item.message}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
