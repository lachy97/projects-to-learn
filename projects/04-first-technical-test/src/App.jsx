import { useCatImage } from './hooks/useCatImage'
import './App.css'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const {fact,refreshRandomFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})

  return (
    <>
      <h2>Fecht</h2>
      <button onClick={refreshRandomFact}>Get new fact</button>
      <section>
        {fact && <div className='set'><h2>{fact}</h2></div>}
        {imageUrl && <div className='set'><img alt='Foto cat' src={imageUrl}/></div>}
      </section>
    </>
  )
}

export default App
