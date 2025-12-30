import { useState } from "react";

function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");

  const addNotification = () => {
    if (!message) return;

    const newNotification = {
      id: Date.now(),
      text: message,
    };

    setNotifications([newNotification, ...notifications]);
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        <h2 style={styles.title}>Dashboard</h2>

        {/* Notification Input */}
        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={addNotification}>
            Add Notification
          </button>
        </div>

        {/* Notifications Panel */}
        <div style={styles.notificationPanel}>
          <h3 style={styles.panelTitle}>Notifications</h3>

          {notifications.length === 0 && (
            <p style={styles.empty}>No notifications available</p>
          )}

          {notifications.map((note) => (
            <div key={note.id} style={styles.notification}>
              {note.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* CSS written as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #232526, #414345)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard: {
    width: "420px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111827",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
  notificationPanel: {
    backgroundColor: "#f3f4f6",
    padding: "15px",
    borderRadius: "8px",
    maxHeight: "200px",
    overflowY: "auto",
  },
  panelTitle: {
    marginBottom: "10px",
    color: "#1f2933",
  },
  notification: {
    backgroundColor: "#e0f2fe",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "8px",
    fontSize: "14px",
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "14px",
  },
};

export default NotificationSystem;
