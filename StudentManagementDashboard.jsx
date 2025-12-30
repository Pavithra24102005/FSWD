import { useState } from "react";

function StudentManagementDashboard() {
  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "Pavi", course: "Computer Science", year: "2nd Year" },
    { id: 2, name: "Nisha", course: "Information Technology", year: "3rd Year" },
    { id: 3, name: "Swathi", course: "Artificial Intelligence", year: "1st Year" },
  ];

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Student Dashboard</h2>
        <div style={styles.navLinks}>
          <span onClick={() => setPage("dashboard")} style={styles.navItem}>
            Dashboard
          </span>
          <span onClick={() => setPage("students")} style={styles.navItem}>
            Students
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {page === "dashboard" && (
          <div style={styles.card}>
            <h3>Welcome!</h3>
            <p>Select a section from the navigation menu.</p>
          </div>
        )}

        {page === "students" && (
          <div style={styles.card}>
            <h3>Student List</h3>

            {students.map((student) => (
              <div key={student.id} style={styles.studentRow}>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Year:</strong> {student.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* CSS written as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    backgroundColor: "#1f2937",
    color: "#ffffff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  content: {
    padding: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
  },
  studentRow: {
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
};

export default StudentManagementDashboard;
