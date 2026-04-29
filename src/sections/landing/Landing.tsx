import Intro from "./components/Intro"
import ScrollTip from "./components/ScrollTip"
import MarqueeArray from "./components/MarqueeArray"

export default function Landing() {
  return (
    <div
      className = "section"
      style = {{
        width: "100%",
        position: "relative",
        height: "var(--content-height)",
        maxHeight: "75rem",
      }}
    >
      <Intro/>
      <MarqueeArray/>
      <ScrollTip/>
    </div>
  )
}