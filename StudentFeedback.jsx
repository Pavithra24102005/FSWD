import React, { useState } from "react";

function StudentFeedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comment) {
      alert("⚠️ Please fill all fields");
      return;
    }

    alert("✅ Feedback submitted successfully!");
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2>Student Feedback</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Rating</option>
            <option value="1">⭐ 1</option>
            <option value="2">⭐⭐ 2</option>
            <option value="3">⭐⭐⭐ 3</option>
            <option value="4">⭐⭐⭐⭐ 4</option>
            <option value="5">⭐⭐⭐⭐⭐ 5</option>
          </select>

          <textarea
            placeholder="Write your comments..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>
      ) : (
        <div style={styles.preview}>
          <h3>Thank You for Your Feedback!</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Rating:</strong> {"⭐".repeat(rating)}</p>
          <p><strong>Comment:</strong> {comment}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
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
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#af874cff",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  preview: {
    backgroundColor: "#faf9ffff",
    padding: "15px",
    borderRadius: "8px",
  },
};

export default StudentFeedback;
