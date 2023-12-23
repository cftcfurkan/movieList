const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const averageRuntime = average(watched.map((movie) => movie.runtime));
  const RoundAverageRuntime = averageRuntime.toFixed(1);
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{RoundAverageRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
