import Card from "@/components/Card"

function Contact() {
  return (
    <div className = "section-container">
      <div
        className = "fade-in-container section-item"
        style = {{
          width: "100%",
          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        <div style = {{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>
          <h2 style = {{
            textAlign: "center",
          }}>Get in Touch</h2>
          <h5 style = {{
            textAlign: "center",
          }}>I'll try to get back as quickly as possible! </h5>
        </div>
        

        <Card style = {{
          maxWidth: "40rem",
        }}>
          OOGA BOOGA UNFINISHED PART BOOGA OOGA
          lorem ipsum?
        </Card>
        
      </div>
    </div>
  )
}

export default Contact