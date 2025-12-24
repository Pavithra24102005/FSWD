import React from "react";

function HotelReservationSystem() {

  const reserveRoom = () => {
    alert("Welcome to Grand Palace Hotel");

    let guestName = prompt("Enter your name:");
    if (guestName === null || guestName === "") {
      alert("Reservation cancelled");
      return;
    }

    let roomType = prompt("Enter room type (Single / Double):");
    let nights = prompt("Enter number of nights:");

    nights = Number(nights);

    if (isNaN(nights) || nights <= 0) {
      alert("Invalid number of nights");
      return;
    }

    let confirmReservation = confirm(
      "Please confirm your reservation:\n\n" +
      "Guest Name: " + guestName + "\n" +
      "Room Type: " + roomType + "\n" +
      "Nights: " + nights
    );

    if (confirmReservation) {
      alert("Reservation Successful!\nEnjoy your stay 🏨");
    } else {
      alert("Reservation Cancelled");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>
        Reserve Room
      </button>
    </div>
  );
}

export default HotelReservationSystem;
