import './App.css'
import ListRM from 'remoteApp/ListRM';
import ListSW from 'remoteApp2/ListSW';
import { useState } from 'react';
function App() {

  const [idioma , setIdioma] = useState('es-ES')
  const [showFirstApp, setShowFirstApp] = useState(false)
  const [showSecondApp, setShowSecondApp] = useState(false)

  const display = {
    'es-ES': {
      title: 'Lista de personajes',
      firstButton: 'Mostrar primera app',
      secondButton: 'Mostrar segunda app'
    },
    'en-US': {
      title: 'Characters list',
      firstButton: 'Show first app',
      secondButton: 'Show second app'
    }
  }

  return (
    <div className="App">
      <h2>{display[idioma].title}</h2>
      <select onChange={(e) => setIdioma(e.target.value)}>
        <option value="es-ES" selected>Español</option>
        <option value="en-US">English</option>
      </select>
      <button onClick={() => setShowFirstApp(!showFirstApp)}>{display[idioma].firstButton}</button>
      <button onClick={() => setShowSecondApp(!showSecondApp)}>{display[idioma].secondButton}</button>
      <div>
        {
          showFirstApp && <ListRM lang={idioma}/>
        }
        {
          showSecondApp && <ListSW lang={idioma}/>
        }
      </div>
    </div>
  )
}

export default App
