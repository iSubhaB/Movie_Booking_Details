import React, { useState, useRef } from "react";
import TicketBilling1 from "./Ticket_Billing";

interface Test {
  movie: string;
  time: string;
  ticket: string;
}

const Ticket_SelectionFP = () => {
  const [movieshow, setMovieshow] = useState<Test>({ movie: "", time: "", ticket: "" });
  const [ticketsPass, setTicketsPass] = useState<Test[]>([]);
  const ref1 = useRef<HTMLButtonElement>(null);

  const [bangTicketAvl, setBangTicketAvl] = useState<number>(20);
  const [fighterTicketAvl, setFighterTicketAvl] = useState<number>(20);
  const [krrishTicketAvl, setKrrishTicketAvl] = useState<number>(20);
  const [knphTicketAvl, setKnphTicketAvl] = useState<number>(20);

  const [bookingDone, setBookingDone] = useState(false);

  const bookMovie = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieshow({ ...movieshow, movie: e.target.value });
  };

  const bookShow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieshow({ ...movieshow, time: e.target.value });
  };

  const countTicket = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieshow({ ...movieshow, ticket: e.target.value });
  };

  const passTicket = () => {
    if (movieshow.movie === "" || movieshow.time === "" || movieshow.ticket === "") {
      alert("⚠️ All fields are required!");
      return;
    }

    const ticketCount = Number(movieshow.ticket);

    if (movieshow.movie === "Bang Bang" && ticketCount > bangTicketAvl) {
      alert("❌ Not enough tickets available for Bang Bang!");
      return;
    }
    if (movieshow.movie === "Fighter" && ticketCount > fighterTicketAvl) {
      alert("❌ Not enough tickets available for Fighter!");
      return;
    }
    if (movieshow.movie === "Krrish" && ticketCount > krrishTicketAvl) {
      alert("❌ Not enough tickets available for Krrish!");
      return;
    }
    if (movieshow.movie === "Kaho Na Pyar Hai" && ticketCount > knphTicketAvl) {
      alert("❌ Not enough tickets available for Kaho Na Pyar Hai!");
      return;
    }

    const confirmed = window.confirm(
      `🎬 Movie: ${movieshow.movie} | 🕒 Showtime: ${movieshow.time} | 🎟 Total Tickets: ${movieshow.ticket}`
    );

    if (confirmed) {
      const newTicket: Test = {
        movie: movieshow.movie,
        time: movieshow.time,
        ticket: movieshow.ticket,
      };

      setTicketsPass((prev) => [...prev, newTicket]);

      switch (movieshow.movie) {
        case "Bang Bang":
          setBangTicketAvl(bangTicketAvl - ticketCount);
          break;
        case "Fighter":
          setFighterTicketAvl(fighterTicketAvl - ticketCount);
          break;
        case "Krrish":
          setKrrishTicketAvl(krrishTicketAvl - ticketCount);
          break;
        case "Kaho Na Pyar Hai":
          setKnphTicketAvl(knphTicketAvl - ticketCount);
          break;
      }

      setMovieshow({ movie: "", time: "", ticket: "" });
      setBookingDone(true);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#e3e4e8", padding: "3rem" }}
    >
      {bookingDone ? (
        <TicketBilling1 bill={ticketsPass} />
      ) : (
        <div
          className="p-5 rounded shadow w-100"
          style={{
            maxWidth: "850px",
            minHeight: "600px",
            backgroundColor: "#f8f9fa",
            fontSize: "1.25rem",
            color: "#343a40",
            border: "2px solid #ced4da",
          }}
        >
          <h2 className="text-center mb-4 fw-bold text-primary">
            🎟 Movie Ticket Booking
          </h2>

          <div className="form-group mb-4">
            <label className="fw-bold mb-2">Select Movie</label>
            <select
              className="form-control form-control-lg"
              value={movieshow.movie}
              onChange={bookMovie}
            >
              <option value="">-- Choose --</option>
              <option value="Bang Bang">Bang Bang (Available: {bangTicketAvl})</option>
              <option value="Fighter">Fighter (Available: {fighterTicketAvl})</option>
              <option value="Krrish">Krrish (Available: {krrishTicketAvl})</option>
              <option value="Kaho Na Pyar Hai">Kaho Na Pyar Hai (Available: {knphTicketAvl})</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label className="fw-bold mb-2">Show Time</label>
            <div className="d-flex gap-4">
              {["morning", "afternoon", "evening"].map((slot) => (
                <div className="form-check" key={slot}>
                  <input
                    type="radio"
                    id={slot}
                    name="showtime"
                    value={slot}
                    className="form-check-input"
                    onChange={bookShow}
                    checked={movieshow.time === slot}
                  />
                  <label htmlFor={slot} className="form-check-label text-capitalize">
                    {slot}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group mb-5">
            <label className="fw-bold mb-2">Number of Tickets</label>
            <input
              type="number"
              className="form-control form-control-lg"
              value={movieshow.ticket}
              onChange={countTicket}
              min="1"
            />
          </div>

          <div className="text-center">
            <button
              className="btn btn-lg btn-primary w-100 fw-bold"
              ref={ref1}
              onClick={passTicket}
            >
              🎟 Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticket_SelectionFP;
