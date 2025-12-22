export default function Card({ title, description, extra }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: "10px" }}>{description}</p>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{extra}</p>
    </div>
  );
}
