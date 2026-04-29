import "@/index.css"
import "@/theme.css"
import "@/layout.css"
import Navbar from "@/components/Navbar"
import AboutMe from "@/sections/aboutMe/AboutMe"
import Landing from "@/sections/landing/Landing"
import Skillset from "@/sections/skillset/Skillset"
import Showcase from "./sections/showcase/Showcase"
import FadeInObserver from "./components/FadeInObserver"
import { useEffect, useRef } from "react"

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
      minHeight: "25rem",
      flexDirection: "column",
      backgroundColor: "var(--background)",
      overflow: "hidden",
    }}>
      <FadeInObserver/>
      <Navbar/>
      <div
        ref = {scrollRef}
        className = "page-padding-container"
        style = {{
          position: "relative",
          width: "100vw",
          maxWidth: "85rem",
          flexDirection: "column",
          margin: "0 auto",
          contain: "paint",
          overflowX: "hidden",
          scrollbarWidth: "none",
          flex: 1,
        }}
      >
        <Landing/>
        <AboutMe/>
        <Skillset/>
        <Showcase/>
      </div>
    </div>
  )
}

export default App
