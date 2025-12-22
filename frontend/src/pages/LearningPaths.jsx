import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function LearningPaths() {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/learning-paths")
      .then(res => res.json())
      .then(data => {
        setPaths(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container">Loading learning paths...</div>;
  }

  return (
    <div className="container">
      <h2>Learning Paths</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {paths.map(path => (
          <Card
            key={path._id}
            title={path.title}
            description={path.description}
            extra={path.duration}
          />
        ))}
      </div>
    </div>
  );
}
