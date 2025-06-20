
import { Link } from "react-router-dom";
import "./Css_File/SearchMovie.css"
import bgImage from "./Image/Cinema.jpg";

export const HomeFPP = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="bg-dark bg-opacity-50 p-5 rounded-4 shadow-lg">
        <h1 className="display-3 fw-bold mb-3">🎬 Welcome to World Of Movie</h1>
        <p className="lead mb-4">Explore the latest and greatest in cinema.</p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Link to="/search" className="btn btn-primary btn-lg px-4 shadow">
            Search Movies
          </Link>
          <Link to="/running" className="btn btn-outline-light btn-lg px-4 shadow">
            Currently Running
          </Link>
          <Link to="/ticket" className="btn btn-primary btn-lg px-4 shadow">
            Ticket Check
          </Link>
        </div>
      </div>
    </div>
  );
};
