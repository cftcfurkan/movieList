import WatchedMovie from "./WatchedMovie";
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <div>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
