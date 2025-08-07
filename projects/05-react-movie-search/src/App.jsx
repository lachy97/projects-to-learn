import './App.css'
import { useState, useCallback } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'
import { useSearch } from './hooks/useSearch'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search: ', search)
      getMovies({ search })
    }, 600)
    , [getMovies])

  const handlerSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  const handlerChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <main className='flex flex-col justify-start items-center'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="flex items-center" onSubmit={handlerSubmit}>
          <input onChange={handlerChange} value={search} placeholder="Nombre de la pelicula ...." />
          <input type='checkbox' onChange={handlerSort} checked={sort} />
          <button type='submit' >Buscar</button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
      </header>
      {
        loading
          ? <p>Cargando ...</p>
          : <Movies movies={movies} />
      }

    </main>
  )
}

export default App
