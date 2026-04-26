import "@/index.css"
import Intro from "./components/Intro"
import ScrollTip from "./components/ScrollTip"
import MarqueeArray from "./components/MarqueeArray"

export default function Landing() {
  return <div
    id = "Landing"
    style = {{
      position: "relative",
      height: "100%",
    }
  }>
    <Intro/>
    <MarqueeArray/>
    <ScrollTip/>
  </div>
}