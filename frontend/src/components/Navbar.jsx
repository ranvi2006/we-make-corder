import { Link } from "react-router-dom";
import logo from "/logo.png";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const logout = () => {
  removeToken();
  navigate("/admin/login");
};

export default function Navbar() {
  return (
    <nav style={{ background: "#0b3c5d", color: "#fff" }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
        }}
      >
        {/* Logo + Brand */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={logo}
            alt="We Make Corder Logo"
            style={{
              width: "42px",
              height: "42px",
              objectFit: "contain",
            }}
          />
          <h2 style={{ margin: 0, fontSize: "1.4rem" }}>
            We Make Corder
          </h2>
        </Link>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/learning-paths">Learning</Link>
          <Link to="/counseling">Counseling</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
