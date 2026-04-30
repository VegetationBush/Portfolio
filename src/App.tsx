import "@/index.css"
import "@/theme.css"
import "@/layout.css"

import Navbar from "@/components/Navbar"
import AboutMe from "@/sections/about/About"
import Landing from "@/sections/landing/Landing"
import Skillset from "@/sections/skillset/Skillset"
import Showcase from "./sections/showcase/Showcase"
import Contact from "./sections/contact/Contact"

import FadeInObserver from "./components/FadeInObserver"
import { useEffect, useRef } from "react"

function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.style.overflow = "hidden";

    const timer = setTimeout(() => {
      el.style.overflowY = "auto";
      el.style.overflowX = "clip"; // NO horizontal scrolling
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style = {{
      display: "flex",
      height: "100dvh",
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "var(--background)",
      overflow: "clip",
    }}>
      <FadeInObserver/>
      <Navbar/>
      
      <div
        ref = {scrollRef}
        style = {{
          position: "relative",
          width: "100vw",
          flex: 1,
          
          justifyItems: "center",
          flexDirection: "column",
          contain: "paint",
          scrollbarWidth: "none",
        }}
      >
        <Landing/>
        <AboutMe/>
        <Skillset/>
        <Showcase/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
