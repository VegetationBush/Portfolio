import "./timeline.css"
import Card from "@/components/Card"

const timelineItems: ({year: string, description: string})[] = [
  {year: "2018", description: "A flash of inspiration. Composed my first peice of music!"},
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
            
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent)",
            backgroundColor: "var(--accent)",
          }}/>

          {/* dots */}
          <div style = {{
            position: "relative",
            height: "100%",
            width: "1rem",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            {timelineItems.map((_, index) => (
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
            ))}

            {/* add a trailing div for spacing hack */}
            <div/> 
          </div>
          

          {/* Timeline content */}
          <div style = {{
            position: "relative",
            flex: 1,

            gap: "1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            {timelineItems.map((item, index) => (
              <div key = {index} style = {{ position: "relative", flex: 1 }}>
                <h3>{item.year}</h3>
                <p>{item.description}</p>
              </div>
            ))}

            {/* add a trailing div for spacing hack */}
            <div/>
          </div>

        </div>
      </div>
    </Card>
  )
}

export default Timeline