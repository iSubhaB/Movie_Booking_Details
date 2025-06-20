import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details_ViewFP = () => {
  const [movie, setMovie] = useState<any>(null);
  const { id }: any = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=2eba494&i=${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleClose = () => {
    navigate("/search");
  };

  return (
    <>
      {movie ? (
        <div className="container my-5 position-relative" 
         style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
        right: 300,
        bottom: 0,
      }}>
          <button
            onClick={handleClose}
            className="btn-close position-absolute"
            style={{ top: "1rem", right: "1.5rem" }}
            aria-label="Close"
          ></button>

          <div className="row">
            <div className="col-md-4 text-center mb-3">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-8">
              <h1 className="mb-3">{movie.Title}</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Year:</strong> {movie.Year}
                </li>
                <li className="list-group-item">
                  <strong>Rated:</strong> {movie.Rated}
                </li>
                <li className="list-group-item">
                  <strong>Released:</strong> {movie.Released}
                </li>
                <li className="list-group-item">
                  <strong>Runtime:</strong> {movie.Runtime}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong> {movie.Genre}
                </li>
                <li className="list-group-item">
                  <strong>Director:</strong> {movie.Director}
                </li>
                <li className="list-group-item">
                  <strong>Writer:</strong> {movie.Writer}
                </li>
                <li className="list-group-item">
                  <strong>Actors:</strong> {movie.Actors}
                </li>
                <li className="list-group-item">
                  <strong>Plot:</strong> {movie.Plot}
                </li>
                <li className="list-group-item">
                  <strong>Language:</strong> {movie.Language}
                </li>
                <li className="list-group-item">
                  <strong>Country:</strong> {movie.Country}
                </li>
                <li className="list-group-item">
                  <strong>Awards:</strong> {movie.Awards}
                </li>
                <li className="list-group-item">
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                </li>
                <li className="list-group-item">
                  <strong>Metascore:</strong> {movie.Metascore}
                </li>
                <li className="list-group-item">
                  <strong>Box Office:</strong> {movie.BoxOffice}
                </li>
                <li className="list-group-item">
                  <strong>Production:</strong> {movie.Production}
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading movie details...</p>
        </div>
      )}
    </>
  );
};

export default Details_ViewFP;
