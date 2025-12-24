import React from "react";

function FlightTicketBooking() {

  const bookTicket = () => {
    alert("Welcome to Flight Ticket Booking System");

    let name = prompt("Enter your name:");
    if (name === null || name === "") {
      alert("Booking cancelled");
      return;
    }

    let fromCity = prompt("Enter departure city:");
    let toCity = prompt("Enter destination city:");
    let tickets = prompt("Enter number of tickets:");

    tickets = Number(tickets);

    if (isNaN(tickets) || tickets <= 0) {
      alert("Invalid ticket number");
      return;
    }

    let confirmBooking = confirm(
      "Please confirm your booking:\n\n" +
      "Name: " + name + "\n" +
      "From: " + fromCity + "\n" +
      "To: " + toCity + "\n" +
      "Tickets: " + tickets
    );

    if (confirmBooking) {
      alert("Booking Successful!\nHave a safe journey ✈️");
    } else {
      alert("Booking Cancelled");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>
        Book Ticket
      </button>
    </div>
  );
}

export default FlightTicketBooking;
