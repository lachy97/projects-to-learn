import axios from "axios"

const API_URL = "http://www.omdbapi.com/?apikey=d54e4a1f&s="

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const { data } = await axios.get(`${API_URL}${search}`)
        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
        }))
    } catch (e) {
        console.log(e)
        throw new Error('Error buscando peliculas')
    }
}