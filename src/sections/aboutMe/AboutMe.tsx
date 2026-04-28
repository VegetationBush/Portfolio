import Card from '@/components/Card'

import { useFadeInOnScroll } from '@/util/fadeInOnScroll'

const timelineItems: ({year: string, description: string})[] = [
  {year: "2018", description: "Composed my first peice of music."},
  {year: "2019", description: "Began my game development journey and wrote my first line of real code."},
  {year: "2020", description: "Began experimenting with various software. Completed my very first paid commision."},
  {year: "2021", description: "Released my first successful software product."},
  {year: "2022", description: "Launched a multiplayer experience with measurable traction and concurrent users."},
  {year: "... to the present!", description: "A lot of progress has been made! Go to the showcase section to see more."},
]

function AboutMe() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <div
      ref={ref}
      className = "split-container"
      style = {{
        position: "relative",
        minHeight: "var(--content-height)",
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        
        alignContent: "center",
        justifyContent: "center",
        padding: "5rem 0",
        gap: "3.5rem",
        
        opacity: isVisible ? 1 : 0,

        "--wrap-length": 40,
        "--left": 3,
        "--right": 5,
      } as React.CSSProperties}
    >

      {/* Text section */}
      <div
        className = "split-item-left"
        style = {{
          position: "relative",
          minWidth: "20rem",

          display: "flex",
          flexDirection: "column",
          rowGap: "2rem",
        }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate creator who enjoys learning, building, and exploring novel ideas across different domains. I am naturally
          motivated when I turn ideas into real, tangible curiosities.
        </p>

        <div style = {{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
          <h3>The Spark</h3>
          <p>
            When I was still in elementary school, I quickly found myself immersed in the world of creation, startng my career with music
            composition. I have since explored and developed various skills across multiple disciplines, from digital arts and game
            development, to design and software development.
          </p>
        </div>
        
        <div style = {{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
          <h3>A Lifelong Learner</h3>
          <p>
            I am grateful for the opportunity to catch this dream when I was still young. It has shaped how I think and grow, in ways that would
            be greatly foreign to my past self. Over time, I learned that consistency with a splash of talent (and a bit of luck), can take you
            (almost) anywhere.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <Card
        className = "split-item-right"
        style = {{
          position: "relative",
          minWidth: "20rem",
          minHeight: "30rem",

          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <h3 style = {{
          position: "relative",
          width: "100%",
          fontWeight: "600",
        }}>
          Early Career
        </h3>
        
        {/* timeline inforgraphic */}
        <div style = {{
          width: "100%",
          position: "relative",
          height: "1rem",
          flex: 1,

          display: "flex",
        }}>
          
          {/* timeline line */}
          <div style = {{
            display: "flex",
            width: "100%",

            gap: "1rem",
          }}>

            {/* vertical line */}
            <div style = {{
              position: "absolute",
              height: "100%",
              width: "0.2rem",
              translate: "50% 0",
              left: "0.25rem",
              
              backgroundColor: "var(--accent)",
            }}/>

            {/* dots */}
            <div style = {{
              position: "relative",
              width: "1rem",
              height: "100%",

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              {timelineItems.map((_, index) => (
                <div>
                  <div
                    key = {index}
                    style = {{
                      position: "relative",
                      textAlign: "center",
                      height: "1rem",
                      width: "1rem",
                      backgroundColor: "var(--background)",
                      borderRadius: "100%",
                      border: "0.225rem solid var(--primary)",
                    }}
                  />
                </div>
              ))}
            </div>
            

            {/* Timeline content */}
            <div style = {{
              position: "relative",
              height: "100%",
              flex: 1,

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              {timelineItems.map((item, index) => (
                <div key = {index}>
                  <h3>{item.year}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Card>
    </div>
  )
}

export default AboutMe
