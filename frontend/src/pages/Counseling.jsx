import { useState } from "react";

export default function Counseling() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:3000/api/counseling/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Counseling request submitted");
    setForm({ name: "", email: "", goal: "", message: "" });
  }

  return (
    <div className="container">
      <h2>Book Counseling</h2>
      <p>Get personal guidance for your learning journey.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="goal" placeholder="Your Goal" value={form.goal} onChange={handleChange} required />
        <textarea name="message" placeholder="Tell us about yourself" value={form.message} onChange={handleChange} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
