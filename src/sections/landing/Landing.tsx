import "@/index.css"
import Intro from "./components/Intro"
import ScrollTip from "./components/ScrollTip"
import MarqueeArray from "./components/MarqueeArray"

export default function Landing() {
  return <div
    id = "Landing"
    style = {{
      position: "relative",
      height: "calc(100vh - var(--navbar-height))",
      flexShrink: 0,
    }
  }>
    <Intro/>
    <MarqueeArray/>
    <ScrollTip/>
  </div>
}