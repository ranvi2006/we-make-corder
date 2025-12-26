import { useEffect, useState } from "react";
import api from "../utils/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api
      .get("/api/admin/dashboard")
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, []);

  if (!stats) return <div className="container">Loading dashboard...</div>;

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">
          <h3>Total Counseling</h3>
          <p>{stats.totalCounseling}</p>
        </div>

        <div className="card">
          <h3>Today</h3>
          <p>{stats.todayCounseling}</p>
        </div>
      </div>
    </div>
  );
}
