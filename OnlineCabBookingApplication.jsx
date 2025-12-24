function OnlineCabBookingApplication() {
  const bookCab = () => {
    // Prompt for user name
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    // Prompt for pickup location
    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Pickup location is required!");
      return;
    }

    // Prompt for drop location
    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Drop location is required!");
      return;
    }

    // Confirm booking
    const confirmBooking = confirm(
      `Confirm Cab Booking?\n\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}`
    );

    if (confirmBooking) {
      alert(
        `Cab Booked Successfully 🚕\n\nPassenger: ${name}\nFrom: ${pickup}\nTo: ${drop}`
      );
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Online Cab Booking</h2>
        <p>Book your cab using dialog boxes</p>
        <button style={styles.button} onClick={bookCab}>
          Book Cab
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default OnlineCabBookingApplication;
