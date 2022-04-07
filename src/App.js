import './App.css'
import Button from './components/Button'
function App() {
  const alertUser = () => {
    alert('button pressed')
  }

  return (
  <div>
    <Button text="Awesome Button" handleClick={alertUser} />
    <Button text="Bummer Button" handleClick={alertUser} />
    <Button text="okay Button" handleClick={alertUser} />
  </div>
  )
  }

export default App
