import { useState } from "react";
import api from "../utils/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {

        console.log ("Page 3");
        console.log(email, password);
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });
      console.log(res.data);

      setToken(res.data.token);
      navigate("/admin/counseling");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h2>Admin Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
