import { useEffect, useState } from "react";
import api from "../utils/api";

export default function AdminCounseling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/counseling/all")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unauthorized or failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="container">
      <h2>Counseling Requests</h2>

      {data.map((item) => (
        <div key={item._id}>
          <strong>{item.name}</strong> — {item.goal}
        </div>
      ))}
    </div>
  );
}
