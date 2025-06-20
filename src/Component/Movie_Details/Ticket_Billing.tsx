import React from "react";


interface Test {
  movie: string;
  time: string;
  ticket: string;
}

const TicketBillingFP = ({ bill }: { bill: Test[] }) => {
  let totalTickets = 0;
  bill.map((v) => (totalTickets = totalTickets + Number(v.ticket)));

  const ticketNo = React.useMemo(
    () => Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,[]);

  const ScreenNo = React.useMemo(
    () => Math.floor(Math.random() * (9 - 1 )) + 1, []);
    
  const SeatNo = React.useMemo(
    () => Math.floor(Math.random() * (15 - 2 )) + 2, [] );

  return (
    <div className="container mt-4">
      <div className="card shadow-sm bg-dark text-white small-card">
        <div className="card-body">
          <h4 className="card-title text-center mb-3 text-warning">
            🎬 Ticket Summary
          </h4>

          {bill.length === 0 ? (     /*First Condition */
            <div className="text-center text-secondary">
              No Ticket Booked Yet
            </div>
          ) : totalTickets > 50 ? ( /*2nd Condition */
            <div className="alert alert-danger text-center" role="alert">
             🚫 Maximum 50 Tickets Allowed
            </div>
          ) : (
            <div className="table-responsive">
              <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                <span className="fw-bold text-info">
                  🎟️ Ticket No:<span className="text-white">{ticketNo}</span><br /> <span className="badge bg-success ms-2">🎥 Screen No: {ScreenNo}</span><br />
                  <span className="badge bg-success ms-2">🎥 Seat No: {SeatNo+"A"}</span>

                </span>

                <span className="fw-bold text-warning">
                  🗓️ Date:{" "}
                  <span className="text-white">
                    {new Date().toLocaleDateString()}
                  </span>
                  <br />
                  <span className="fw-bold text-success">
                    ⏰ Booking Time :{" "}
                    <span className="text-white">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </span>
                  <br />
                </span>
              </div>

              <table className="table table-dark table-bordered table-sm text-center">
                <thead className="thead-light">
                  <tr>
                    <th>Movie</th>
                    <th>Show Time</th>
                    <th>Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  {bill.map((v, index) => (
                    <tr key={index}>
                      <td>{v.movie}</td>
                      <td>{v.time}</td>
                      <td>{v.ticket}</td>
                    </tr>
                  ))}
                  <tr className=" bg-info">
                    {" "}
                    {/* Added custom class */}
                    <td colSpan={2}>Total Tickets</td>
                    <td>{totalTickets}</td>
                    <td>
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                          `Total Tickets: ${totalTickets}`
                        )}&size=60x60`}
                        alt="QR Code"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-3">
                <button onClick={() => window.print()}> 🖨️ Print</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketBillingFP;
