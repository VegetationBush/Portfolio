import '@/index.css'
import Navbar from '@/components/Navbar'
import AboutMe from '@/sections/AboutMe'
import Landing from '@/sections/landing/Landing'

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
        <Landing/>
        <AboutMe/>
      </div>
      
    </div>
  )
}

export default App
