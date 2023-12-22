import { useState } from 'react'
import { List } from "./components/List/List"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <List />
      </div>
    </div>
  )
}

export default App
