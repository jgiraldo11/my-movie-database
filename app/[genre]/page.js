import MovieScroll from "../shared/MovieScroll"

export function generateStaticParams() {
    return [
        {genre: 'comedy'},
        {genre: 'drama'},
        {genre: 'horror'},
    ]
}

export function generateMetadata({ params: { genre }}) {
    return {
        title: `My ${genre} Movie Database`,
        description: `Here are some of my favorite ${genre} movies.`,
    }
}

export default function Page({params: { genre } }) {
    return (
        <main className="p-8">
            <h1 className="capitalize text-2xl text-orange-400 font-semibold" >
                {genre} Movies
            </h1>
            <MovieScroll genre={genre} number={12} />
        </main>
    )
}