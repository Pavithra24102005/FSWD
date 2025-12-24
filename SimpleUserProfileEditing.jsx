import { useState } from "react";

function SimpleUserProfileEditing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  const [profile, setProfile] = useState(null);

  const handleSubmit = () => {
    let validationErrors = {};

    if (!name) validationErrors.name = "Name is required";

    if (!email) validationErrors.email = "Email is required";
    else if (!email.includes("@"))
      validationErrors.email = "Enter a valid email";

    if (!age) validationErrors.age = "Age is required";
    else if (age < 18)
      validationErrors.age = "Age must be 18 or above";

    if (!place) validationErrors.place = "Place is required";

    if (!phone) validationErrors.phone = "Phone number is required";
    else if (phone.length !== 10)
      validationErrors.phone = "Phone number must be 10 digits";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setProfile({ name, email, age, place, phone });
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit User Profile</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
        {errors.age && <p style={styles.error}>{errors.age}</p>}

        <input
          type="text"
          placeholder="Enter Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          style={styles.input}
        />
        {errors.place && <p style={styles.error}>{errors.place}</p>}

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        {errors.phone && <p style={styles.error}>{errors.phone}</p>}

        <button style={styles.button} onClick={handleSubmit}>
          Update Profile
        </button>
      </div>

      {/* Updated Profile Output */}
      {profile && (
        <div style={styles.outputCard}>
          <h3 style={styles.outputTitle}>Updated Profile</h3>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Place:</strong> {profile.place}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>
      )}
    </div>
  );
}

/* CSS as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
  },
  card: {
    width: "380px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#4f46e5",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    textAlign: "left",
    marginBottom: "8px",
  },
  outputCard: {
    width: "380px",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    marginTop: "20px",
  },
  outputTitle: {
    color: "#4f46e5",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default SimpleUserProfileEditing;
