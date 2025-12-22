import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Build together. Grow together.</h1>
      <p style={{ marginTop: "10px", maxWidth: "600px" }}>
        We Make Corder helps students learn, get proper guidance,
        and build real confidence for their careers.
      </p>

      <Link to="/learning-paths" className="btn">
        Explore Learning Paths
      </Link>
    </div>
  );
}
