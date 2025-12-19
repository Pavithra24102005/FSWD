import { useState } from "react";

export default function AttendenceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Pavi", present: false },
    { id: 2, name: "Nisha", present: false },
    { id: 3, name: "Swathi", present: false },
    { id: 4, name: "Madhu", present: false }
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <>
      {/* CSS INSIDE JSX */}
      <style>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .title {
          text-align: center;
          color: white;
          margin-bottom: 30px;
        }

        .attendance-list {
          max-width: 500px;
          margin: auto;
        }

        .student-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          margin-bottom: 12px;
          border-radius: 8px;
          color: white;
          transition: transform 0.2s ease;
        }

        .student-card:hover {
          transform: scale(1.02);
        }

        .present {
          background-color: #2ecc71;
        }

        .absent {
          background-color: #e74c3c;
        }

        .student-name {
          font-size: 18px;
          font-weight: bold;
        }

        .attendance-btn {
          background: white;
          border: none;
          padding: 8px 14px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .attendance-btn:hover {
          background: #f1f1f1;
        }
      `}</style>

      {/* JSX UI */}
      <div className="app-container">
        <h1 className="title">Attendance Tracker</h1>

        <div className="attendance-list">
          {students.map((student) => (
            <div
              key={student.id}
              className={`student-card ${
                student.present ? "present" : "absent"
              }`}
            >
              <span className="student-name">{student.name}</span>

              <button
                className="attendance-btn"
                onClick={() => toggleAttendance(student.id)}
              >
                {student.present ? "Mark Absent" : "Mark Present"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
