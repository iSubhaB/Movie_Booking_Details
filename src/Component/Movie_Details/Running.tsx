import  { useState } from "react";
import bangimg from "./Image/Bang_Bang.jpg";
import jockerimg from "./Image/the-joker-movie.jpg";

// Define the movie type
interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
}

const RunningFP = () => {
  const [movies] = useState<Movie[]>([
    {
      id: 1,
      title: "Bang Bang",
      year: "2025",
      poster: bangimg,
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: "2025",
      poster: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg",
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      year: "2025",
      poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    },
    {
      id: 4,
      title: "Joker",
      year: "2025",
      poster: jockerimg,
    },
  ]);
  return (
    <div
      className="min-vh-100 bg-info-subtle "
      style={{ backgroundColor: "#f0f4f8" }} // Light pastel blue
    >
      <div className="container py-5">
        <h2 className="text-center text-primary mb-5 display-5 fw-bold">
          🎬 Now Running This Week
        </h2>

        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={movie.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={movie.poster}
                  className="card-img-top rounded-top"
                  alt={movie.title}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body bg-white">
                  <h5 className="card-title text-dark fw-semibold">
                    {movie.title}
                  </h5>
                  <p className="card-text text-muted">Released: {movie.year}</p>
                  <button className="btn btn-outline-primary w-100 mt-2" >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningFP;
