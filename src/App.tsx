import './index.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import InfoBar from './components/InfoBar'
import ScrollTip from './components/ScrollTip'
import AboutMe from './sections/AboutMe'

function App() {
  return (
    <div style = {{
      display: "flex",
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "var(--background)",
      overflow: "hidden",
      gap: 0,
    }}>
      <Navbar/>
      <div style = {{
        position: "relative",
        display: "flex",
        padding: 0,
        margin: 0,
        flexDirection: "column",
        overflowY: "auto",
        scrollbarWidth: "none",

      }}>
        <div style = {{
          position: "relative",
          height: "calc(100dvh - var(--navbar-height))",
          flexShrink: 0,
        }}>
          <Intro/>
          <InfoBar />
          <ScrollTip/>
        </div>
        <AboutMe/>
      </div>
      
    </div>
  )
}

export default App
