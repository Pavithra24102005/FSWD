import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const productName = "Wireless Headphones";

  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !rating || !review) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = {
      username,
      rating,
      review,
    };

    setFeedbacks([...feedbacks, newFeedback]);

    // clear form
    setUsername("");
    setRating("");
    setReview("");
  };

  return (
    <div className="product-feedback-container">
      <div className="product-card">
        <h2 className="product-title">{productName}</h2>
        <p className="product-desc">
          Share your experience with this product
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <select
            className="input-field"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (Very Good)</option>
            <option value="3">⭐⭐⭐ (Good)</option>
            <option value="2">⭐⭐ (Average)</option>
            <option value="1">⭐ (Poor)</option>
          </select>

          <textarea
            className="input-field"
            placeholder="Write your review"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <button className="submit-btn" type="submit">
            Submit Review
          </button>
        </form>
      </div>

      {feedbacks.length > 0 && (
        <div className="review-section">
          <h3>Customer Reviews</h3>

          {feedbacks.map((item, index) => (
            <div key={index} className="review-card">
              <p><strong>Name:</strong> {item.username}</p>
              <p><strong>Rating:</strong> {item.rating} ⭐</p>
              <p><strong>Review:</strong> {item.review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;

* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Background */
body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #66ea6d, #4ba26c);
}

/* Main container */
.product-feedback-container {
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* Product card */
.product-card {
  width: 400px;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  text-align: center;
}

/* Product title */
.product-title {
  color: #4f46e5;
  margin-bottom: 5px;
}

.product-desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

/* Form */
.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Inputs */
.input-field {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: #4f46e5;
}

/* Submit button */
.submit-btn {
  padding: 10px;
  background-color: #e54646;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #4338ca;
}

/* Review section */
.review-section {
  width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

/* Individual review */
.review-card {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.review-card:last-child {
  border-bottom: none;
}

