import '@/index.css'
import Navbar from '@/components/Navbar'
import AboutMe from '@/sections/aboutMe/AboutMe'
import Landing from '@/sections/landing/Landing'

import { useEffect, useRef } from 'react'

function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.style.overflow = "hidden";

    const timer = setTimeout(() => {
      el.style.overflow = "auto";
    }, 2150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style = {{
      display: "flex",
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "var(--background)",
      overflow: "hidden",
    }}>
      <Navbar/>


      <div
        ref = {scrollRef}
        style = {{
          position: "relative",
          width: "100vw",
          maxWidth: "1350px",
          flexDirection: "column",
          margin: "0 auto",
          overflowY: "auto",
          boxSizing: "border-box",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          scrollbarWidth: "none",
          flex: 1,
        }}
      >
<div style={{
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  opacity: 0.06,
  zIndex: 0,
  backgroundImage: `
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff15'/%3E%3C/svg%3E")
  `,
}} />
        <Landing/>
        <AboutMe/>
      </div>
    </div>
  )
}

export default App
