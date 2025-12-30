import { useState } from "react";

const StudentDashboard = () => {
  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "Pavi", dept: "CSE", year: "III" },
    { id: 2, name: "Madhu", dept: "IT", year: "II" },
    { id: 3, name: "Niki", dept: "ECE", year: "I" },
  ];

  const renderContent = () => {
    if (page === "dashboard") {
      return (
        <div>
          <h2>📊 Dashboard</h2>
          <p>Total Students: <strong>{students.length}</strong></p>
        </div>
      );
    }

    if (page === "students") {
      return (
        <div>
          <h2>📋 Student List</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Department</th>
                <th style={styles.th}>Year</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td style={styles.td}>{s.name}</td>
                  <td style={styles.td}>{s.dept}</td>
                  <td style={styles.td}>{s.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (page === "profile") {
      return (
        <div>
          <h2>👤 Admin Profile</h2>
          <p><strong>Name:</strong> Admin</p>
          <p><strong>Role:</strong> Student Manager</p>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <div style={styles.sidebar}>
        <h3>🎓 Student Panel</h3>
        <button style={styles.navBtn} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
        <button style={styles.navBtn} onClick={() => setPage("students")}>
          Students
        </button>
        <button style={styles.navBtn} onClick={() => setPage("profile")}>
          Profile
        </button>
      </div>

      {/* Content Area */}
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6ff",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#6c5ce7",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  navBtn: {
    backgroundColor: "white",
    color: "#6c5ce7",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "left",
  },
  content: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f4f6ff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    backgroundColor: "white",
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#dfe6e9",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
  },
};

export default StudentDashboard;
