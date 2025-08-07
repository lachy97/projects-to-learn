const ListOfMovies = ({ movies }) => {

    return (
        <section className="w-full">
            <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-4'>
                {
                    movies.map(movie => (
                        <li key={movie.id} className="text-center flex flex-col gap-2">
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                            <img src={movie.poster} alt={movie.title} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

const NoMoviesResults = () => {
    return (
        <section>No hay resultados en su busqueda</section>
    )
}

const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}

export default Movies