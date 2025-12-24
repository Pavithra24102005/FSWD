import { useState } from "react";

function LoginInterface() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");

  const handleLogin = () => {
    if (username && role) {
      setPage(role);
    }
  };

  return (
    <div style={styles.page}>
      {page === "login" && (
        <div style={styles.card}>
          <h2 style={styles.title}>Login Interface</h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>

          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>

          {(!username || !role) && (
            <p style={styles.note}>Please enter username and select role</p>
          )}
        </div>
      )}

      {page === "admin" && <Dashboard role="Admin" name={username} />}
      {page === "user" && <Dashboard role="User" name={username} />}
      {page === "guest" && <Dashboard role="Guest" name={username} />}
    </div>
  );
}

/* Dashboard Component */
function Dashboard({ role, name }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{role} Dashboard</h2>
      <p>Welcome, <strong>{name}</strong></p>
      <p>You are logged in as <strong>{role}</strong>.</p>
    </div>
  );
}

/* CSS written as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "340px",
    backgroundColor: "#ffffff",
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
    marginBottom: "15px",
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
  },
  note: {
    marginTop: "10px",
    color: "red",
    fontSize: "13px",
  },
};

export default LoginInterface;
