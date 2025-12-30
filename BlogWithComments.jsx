import React, { useState } from "react";

function BlogWithComments() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      comment,
    };

    setComments([newComment, ...comments]);
    setName("");
    setComment("");
  };

  return (
    <div style={styles.container}>
      {/* Blog Section */}
      <div style={styles.blog}>
        <h1>🌐 Modern Web Development</h1>
        <p style={styles.date}>Posted on Jan 10, 2025</p>
        <p>
          React helps developers build fast and interactive user interfaces.
          Component-based architecture and state management make applications
          scalable and easy to maintain.
        </p>
      </div>

      {/* Comment Section */}
      <div style={styles.comments}>
        <h3>💬 Comments</h3>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Post Comment
          </button>
        </form>

        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} style={styles.commentBox}>
              <strong>{c.name}</strong>
              <p>{c.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  blog: {
    marginBottom: "30px",
  },
  date: {
    color: "gray",
    fontSize: "14px",
  },
  comments: {
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "15px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "15px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  commentBox: {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default BlogWithComments;
