import { team } from "../data/Team";

export default function Team() {
  return (
    <div className="container">
      <h2>Our Team</h2>

      {team.map((member, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <strong>{member.name}</strong> – {member.role}
        </div>
      ))}
    </div>
  );
}
