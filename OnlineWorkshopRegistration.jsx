import { useState } from "react";

function OnlineWorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    organization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Registration Form */}
        <div style={styles.card}>
          <h2 style={styles.title}>Online Workshop Registration</h2>

          <input
            type="text"
            name="name"
            placeholder="Participant Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="workshop"
            value={formData.workshop}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Workshop</option>
            <option value="AI & ML">AI & Machine Learning</option>
            <option value="Web Development">Web Development</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <input
            type="text"
            name="organization"
            placeholder="College / Organization"
            value={formData.organization}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Live Preview */}
        <div style={styles.previewCard}>
          <h3 style={styles.previewTitle}>Live Preview</h3>

          <p><strong>Name:</strong> {formData.name || "-"}</p>
          <p><strong>Email:</strong> {formData.email || "-"}</p>
          <p><strong>Workshop:</strong> {formData.workshop || "-"}</p>
          <p><strong>Organization:</strong> {formData.organization || "-"}</p>
        </div>
      </div>
    </div>
  );
}

/* CSS written as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "320px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#185a9d",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  previewCard: {
    width: "320px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
  },
  previewTitle: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#185a9d",
  },
};

export default OnlineWorkshopRegistration;
