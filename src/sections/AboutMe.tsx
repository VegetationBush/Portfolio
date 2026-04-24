import '@/index.css'
import PerspectiveCard from '@/components/PerspectiveCard'
import TestImage from '@/assets/dark_light.svg'

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
          height: "250px",
          width: "250px",
        }}
      >
        <img
          src = {TestImage}
          style = {{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </PerspectiveCard>
    </div>
  )
}

export default AboutMe
