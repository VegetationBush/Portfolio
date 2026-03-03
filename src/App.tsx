import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import git_brand from './assets/git_brand.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <Button style={{position: "relative", top: 50}} label="Github" imgSrc={git_brand}/>
      </div>
    </>
  )
}

export default App
