import '../index.css'
import PerspectiveCard from '../components/PerspectiveCard'

function AboutMe() {
  return (
    <div
      style = {{
        position: "relative"
    }}>
      <h1 style = {{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}>About Me</h1>

      <PerspectiveCard
        style = {{
          left: 15,
          top: 50,
        }}
      >
        Hello
      </PerspectiveCard>
    </div>
  )
}

export default AboutMe
