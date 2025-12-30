import React, { useState } from "react";

function BasicAuthenticationSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "12345";

    if (!username || !password) {
      alert("⚠️ Please enter username and password");
      return;
    }

    if (username === validUsername && password === validPassword) {
      alert("✅ Login Successful!");
    } else {
      alert("❌ Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default BasicAuthenticationSystem;
