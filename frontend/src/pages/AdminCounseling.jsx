import { useEffect, useState } from "react";

export default function AdminCounseling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/counseling/all")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="container">Loading counseling requests...</div>;
  }

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
