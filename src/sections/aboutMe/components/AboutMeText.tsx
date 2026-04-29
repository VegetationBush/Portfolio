const AboutMeText = () => {
  return (
    <div
      className = "split-item-left"
      style = {{
        position: "relative",
        minWidth: "20rem",

        display: "flex",
        flexDirection: "column",
        rowGap: "3rem",
      }}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate creator who enjoys learning, building, and exploring novel ideas across different domains. I am naturally
        motivated when I turn ideas into real, tangible curiosities.
      </p>

      <div style = {{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
        <h4>The Spark</h4>
        <p>
          When I was still in elementary school, I quickly found myself immersed in the world of creation, startng my career with music
          composition. I have since explored and developed various skills across multiple disciplines, from digital arts and game
          development, to design and software development.
        </p>
      </div>
      
      <div style = {{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
        <h4>A Lifelong Learner</h4>
        <p>
          I am grateful for the opportunity to catch this dream when I was still young. It has shaped how I think and grow, in ways that would
          be greatly foreign to my past self. Over time, I learned that consistency with a splash of talent (and a bit of luck), can take you
          (almost) anywhere.
        </p>
      </div>
    </div>
  )
}

export default AboutMeText