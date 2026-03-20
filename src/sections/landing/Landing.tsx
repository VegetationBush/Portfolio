import "@/index.css"
import InfoBar from "./components/InfoBar"
import Intro from "./components/Intro"
import ScrollTip from "./components/ScrollTip"
import DiagScrollingImages from "./components/ScrollingImage"

export default function Landing() {
  return <div style = {{
    position: "relative",
    height: "calc(100dvh - var(--navbar-height))",
    flexShrink: 0,
  }}>
    <Intro/>
    <InfoBar/>
    <ScrollTip/>
    <DiagScrollingImages/>
  </div>
}