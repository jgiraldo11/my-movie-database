export default function MovieCard({ movie, genre }) {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="flex relative">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-zinc-400 bg-zinc-900 opacity-0 hover:opacity-100 transition">
          <h4 className="capitalize tracking-widest text-sm title-font font-medium text-orange-400 mb-1">
            {genre}
          </h4>
          <h3 className="text-lg title-font font-medium text-zinc-50 mb-3">
            {movie.title}
          </h3>
          <a href={`https://imdb.com/title/${movie.imdbId}`}>Learn more</a>
        </div>
      </div>
    </div>
  );
}
