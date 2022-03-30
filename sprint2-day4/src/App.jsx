import { useState } from 'react'

import './App.css'
import { EmpolyForm } from './components/employform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <EmpolyForm/>
    </div>
  )
}

export default App
