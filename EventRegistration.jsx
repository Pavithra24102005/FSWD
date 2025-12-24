function EventRegistration() {
  const handleRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;

    if (!name || !email || !event) {
      alert("Please fill all the details!");
      return;
    }

    const confirmation = confirm(
      `Confirm Registration?\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`
    );

    if (confirmation) {
      alert("🎉 Registration Successful!");
    } else {
      alert("Registration Cancelled.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Event Registration</h2>

        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          style={styles.input}
        />

        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          style={styles.input}
        />

        <select id="event" style={styles.input}>
          <option value="">Select Event</option>
          <option value="Tech Talk">Tech Talk</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural Fest">Cultural Fest</option>
        </select>

        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

/* CSS written as JSX styles */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #66eaacff, #4ba276ff)",
  },
  card: {
    width: "350px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    color: "#4f46e5",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#46e573ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default EventRegistration;
