
import './App.css'
import { Button } from './components/button'

function App() {
  

  return (
    <div className="App">
      <Button primary border="none" color='white'>
        Primary Button
      </Button>
      <br />
      <Button>
        Default Button
      </Button>
      <br />
      <Button border="dashed">Dashed Button</Button>
      <br />
      <Button border="none">Text Button</Button>
      <br />
      <Button border="none" color='dodgerblue'>Link Button</Button>
    </div>
  )
}

export default App
