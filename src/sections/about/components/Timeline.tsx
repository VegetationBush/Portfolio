import "./timeline.css"
import Card from "@/components/Card"

const timelineItems: ({year: string, description: string})[] = [
  {year: "2018", description: "A flash of inspiration. Composed my first piece of music!"},
  {year: "2019", description: "Began my game development journey and wrote my first line of real code."},
  {year: "2020", description: "Began experimenting with various software. Completed my very first paid commision."},
  {year: "2021", description: "Released my first successful software product."},
  {year: "2022", description: "Launched a multiplayer experience with measurable traction and concurrent users."},
  {year: "... to the present!", description: "Check out the showcase section to see what I've been doing!"},
]

const Timeline = () => {
  return (
    <Card
      className = "split-item-right"
      style = {{
        position: "relative",
        minWidth: "20rem",

        display: "flex",
        flexDirection: "column",
        padding: "3rem 2rem",
        gap: "2rem",
      }}
    >
      <h3 style = {{
        position: "relative",
        width: "100%",
        fontWeight: "600",
      }}>
        Early Milestones
      </h3>
      
      {/* timeline inforgraphic */}
      <div style = {{
        width: "100%",
        position: "relative",
        flex: 1,

        display: "flex",
      }}>

        {/* vertical line */}
        <div style = {{
          position: "absolute",
          height: "100%",
          width: "0.2rem",
          translate: "50% 0",
          left: "0.25rem",
          
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent)",
          backgroundColor: "var(--accent)",
        }}/>
        
        <div style = {{
          position: "relative",
          flex: 1,

          gap: "1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          {timelineItems.map((item, index) => {
            return (
              <div 
                key = {index}
                className = "fade-in-container"
                style = {{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                }}
              >

                {/* dot with line*/}
                <div
                  style = {{
                    position: "relative",
                    textAlign: "center",
                    height: "1rem",
                    width: "1rem",
                    overflow: "visible",

                    backgroundColor: "var(--background)",
                    borderRadius: "100%",
                    border: "0.225rem solid var(--primary)",
                  }}
                >
                  <div style = {{
                    position: "absolute",
                    top: "50%",
                    left: "0.75rem",
                    translate: "0% -50%",

                    width: "0.75rem",
                    height: "0.225rem",
                    backgroundColor: "var(--primary)",
                  }}/>
                </div>

                {/* content */}
                <div
                  style = {{
                    position: "relative",
                    flex: 1,
                  }}
                >
                  <h4>{item.year}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}

          {/* add a trailing div for spacing hack */}
          <div/>
        </div>


      </div>
    </Card>
  )
}

export default Timeline