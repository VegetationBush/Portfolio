import Card from "@/components/Card"
import ContactItem from "./components/ContactItem"
import type { ContactItemProps } from "./components/ContactItem"

import github_img from "@/assets/github-icon.svg?raw"
import linkedin_img from "@/assets/linkedin.svg?raw"
import email_img from "@/assets/email.svg?raw"
import localtion_img from "@/assets/location.svg?raw"
import phone_img from "@/assets/phone.svg?raw"

const contactItems: ContactItemProps[] = [
  {svg: phone_img, label: "(647) 862-5138"},
  {svg: github_img, label: "github.com/VegetationBush"},
  {svg: email_img, label: "hans.yangchenghao@gmail.com"},
  {svg: localtion_img, label: "Toronto, Ontario"},
  {svg: linkedin_img, label: "linkedin.com/in/hans-yang-a2096738b/"},
]

function Contact() {
  return (
    <div className = "section-container background-effect">
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

          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
        }}>
          {contactItems.map((item, index) => {
            return (
              <ContactItem key = {index} {...item}/>
            )
          })}
        </Card>
        
      </div>
    </div>
  )
}

export default Contact