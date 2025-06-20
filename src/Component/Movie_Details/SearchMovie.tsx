import axios from "axios";
import  { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./Image/Cinema2.jpg";

export const SearchMovieFP = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const ref1 = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const movie = ref1.current?.value.trim();
    if (!movie) return alert("Please enter a movie name!");

    axios
      .get(`https://www.omdbapi.com/?apikey=727bbdc1&s=${movie}`)
      .then((res) => {
        res.data.Search
          ? setMovies(res.data.Search)
          : (setMovies([]), alert("No results found!"));
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching movie data.");
      });
  };

  const detailsView = (movie: any) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={
        movies.length === 0
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "white",
              position:"absolute",
              left:0,
              right:0,
              top:0
            }
          : { backgroundColor: "#0d6efd", color: "white", position:"absolute",
              left:0,
              right:0,
              top:0}
      }
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <span className="navbar-brand fw-bold fs-3 ">🎬 Movie Center</span>
        </div>
      </nav>

      {/* Search + Content Area */}
      <div className="flex-grow-1 d-flex flex-column justify-content-start align-items-center py-5 px-3">
        {/* Search Box */}
        <div className="d-flex flex-column flex-md-row gap-3 w-100" style={{ maxWidth: 1000 }}>
          <input
            ref={ref1}
            type="text"
            className="form-control form-control-lg rounded-4 shadow-sm"
            placeholder="Type movie name..."
          />
          <button
            className="btn btn-lg btn-primary rounded-4 shadow-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Welcome Message */}
        {movies.length === 0 && (
          <div
            className="bg-white bg-opacity-75 text-center text-dark mt-5 p-5 rounded-4 shadow-lg w-100"
            style={{ maxWidth: 1100 }}
          >
            <h2 className="text-primary fw-bold mb-3">
             <b>Welcome to the Movie World</b>
            </h2>
            <p className="text-secondary fs-5">
              Search your favorite movie above
            </p>
          </div>
        )}

        {/* Movie Grid */}
        {movies.length > 0 && (
          <div className="container-fluid mt-5">
            <div className="row g-4 justify-content-center">
              {movies.map((movie) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={movie.imdbID}
                >
                  <div
                    className="card h-100 border-0 shadow-lg transition"
                    style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    onClick={() => detailsView(movie)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "https://via.placeholder.com/300x450?text=No+Image"
                      }
                      className="card-img-top"
                      alt={movie.Title}
                      style={{ height: "450px", objectFit: "cover" }}
                    />
                    <div className="card-body bg-white text-dark">
                      <h5 className="card-title">{movie.Title}</h5>
                      <p className="card-text text-muted">Year: {movie.Year}</p>
                    </div>
                    <div>
                      <button onClick={()=>{{ detailsView(movie)}}} className="btn btn-outline-primary"  >See Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
