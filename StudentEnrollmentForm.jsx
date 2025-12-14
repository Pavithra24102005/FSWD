import React, { useState } from "react";
import "./StudentEnrollmentForm.css";

export default function StudentEnrollmentForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    passcode: "",
    about: "",
    level: "",
    hobbies: [],
    city: "",
    profile: null,
    birthDate: "",
    contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const hobbyOptions = ["Reading", "Traveling", "Gaming", "Photography"];

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          hobbies: checked
            ? [...prev.hobbies, value]
            : prev.hobbies.filter((h) => h !== value),
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleFile = (e) => {
    const fileChosen = e.target.files?.[0] || null;
    setData((prev) => ({ ...prev, profile: fileChosen }));
  };

  const handleReset = () => {
    setData({
      firstName: "",
      lastName: "",
      emailId: "",
      passcode: "",
      about: "",
      level: "",
      hobbies: [],
      city: "",
      profile: null,
      birthDate: "",
      contact: "",
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-bg">
      <div className="center-wrapper">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Student Enrollment</h2>

          <div className="grp">
            <label>First Name</label>
            <input name="firstName" value={data.firstName} onChange={handleInput} required />
          </div>

          <div className="grp">
            <label>Last Name</label>
            <input name="lastName" value={data.lastName} onChange={handleInput} required />
          </div>

          <div className="grp">
            <label>Email ID</label>
            <input type="email" name="emailId" value={data.emailId} onChange={handleInput} required />
          </div>

          <div className="grp">
            <label>Passcode</label>
            <input type="password" name="passcode" minLength={6} value={data.passcode} onChange={handleInput} required />
          </div>

          <div className="grp">
            <label>Short Intro</label>
            <textarea name="about" rows="3" value={data.about} onChange={handleInput} />
          </div>

          <div className="grp">
            <label>Course Level</label>
            <select name="level" value={data.level} onChange={handleInput} required>
              <option value="">-- Choose Level --</option>
              <option value="UG">Undergraduate</option>
              <option value="PG">Postgraduate</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>

          <div className="grp">
            <label>Hobbies</label>
            <div className="inline">
              {hobbyOptions.map((hob) => (
                <label key={hob}>
                  <input
                    type="checkbox"
                    name="hobbies"
                    value={hob}
                    checked={data.hobbies.includes(hob)}
                    onChange={handleInput}
                  />
                  {hob}
                </label>
              ))}
            </div>
          </div>

          <div className="grp">
            <label>City</label>
            <input name="city" value={data.city} onChange={handleInput} />
          </div>

          <div className="grp dual">
            <div>
              <label>Date of Birth</label>
              <input type="date" name="birthDate" value={data.birthDate} onChange={handleInput} />
            </div>
            <div>
              <label>Contact No</label>
              <input
                type="tel"
                name="contact"
                value={data.contact}
                onChange={handleInput}
                pattern="[0-9]{10}"
                placeholder="9876543210"
              />
            </div>
          </div>

          <div className="grp">
            <label>Upload Profile</label>
            <input type="file" accept="image/*" onChange={handleFile} />
            {data.profile && <small>Selected: {data.profile.name}</small>}
          </div>

          <div className="actions">
            <button type="submit">Enroll</button>
            <button type="button" onClick={handleReset}>Clear</button>
          </div>
        </form>

        {submitted && (
          <div className="output">
            <h3>Enrollment Successful 🎉</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}


CSS
.page-bg {
  min-height: 100vh;
  width: 100%;
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;   /* vertical + horizontal center */
  padding: 40px 20px;    /* allows scroll when tall */
  box-sizing: border-box;
}

/* Wrapper */
.center-wrapper {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;         /* CENTERING FIX */
  display: flex;
  justify-content: center;
}

/* Form card */
.form-box {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 25px 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;         /* EXTRA CENTERING FIX */
}

/* Mobile fix for long forms */
@media (max-width: 600px) {
  .page-bg {
    align-items: flex-start;   /* allows full scroll */
    padding-top: 25px;
  }

  .form-box {
    margin: 0 auto;
    padding: 20px;
  }
}

/* Heading */
.form-box h2 {
  text-align: center;
  margin-bottom: 18px;
}

/* Inputs */
.grp {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.grp label {
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
}

.inline label {
  margin-right: 12px;
}

input,
select,
textarea {
  padding: 9px;
  border-radius: 6px;
  border: 1px solid gray;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

.dual {
  display: flex;
  gap: 12px;
}

.dual > div {
  flex: 1;
}

/* Buttons */
.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
}

.actions button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  background: #1f74c9;
  color: white;
}

.actions button:nth-child(2) {
  background: #c44141;
}

.actions button:hover {
  opacity: 0.85;
}

/* Output box */
.output {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.82);
  padding: 20px;
  border-radius: 10px;
}
