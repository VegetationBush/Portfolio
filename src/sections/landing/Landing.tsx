import Intro from "./components/Intro"
import ScrollTip from "./components/ScrollTip"
import MarqueeArray from "./components/MarqueeArray"

export default function Landing() {
  return (
    <div style = {{
      position: "relative",
      height: "100%",
      }}
    >
      <div style = {{
        position: "relative",
        height: "100%",
        maxHeight: "60rem",
      }}>
        <Intro/>
        <MarqueeArray/>
        <ScrollTip/>
      </div>
    </div>
  )
}