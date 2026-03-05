import './index.css'
import Navbar from './sections/Navbar'
import Intro from './sections/Intro'
import InfoBar from './sections/InfoBar'
import PerspectiveCard from './components/PerspectiveCard'

function App() {
  return (
    <div style = {{
      display: "flex",
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "var(--background)",
      overflow: "hidden",
    }}>
      <Navbar />
      <div style = {{
        position: "relative",
        flex: 1, 
        display: "flex",
        padding: 0,
        margin: 0,
        overflowY: "auto",
        overflowX: "hidden",
      }}>
        <Intro/>
        <InfoBar />
        <PerspectiveCard title = "Hello" style = {{right: 140, top: 100}}/>
        <PerspectiveCard title = "Hello" style = {{right: 160, top: 120}}/>
        <PerspectiveCard title = "Hello" style = {{right: 180, top: 140}}/>
        <PerspectiveCard title = "Hello" style = {{right: 200, top: 160}}/>
      </div>
    </div>
  )
}

export default App
