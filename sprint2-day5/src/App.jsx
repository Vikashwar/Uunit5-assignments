
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
      <Button border="dashded">Dashed Button</Button>
      <br />
      <Button border="">Text Button</Button>
      <br />
      <Button border="circle" color='black'>Link Button</Button>
    </div>
  )
}

export default App
