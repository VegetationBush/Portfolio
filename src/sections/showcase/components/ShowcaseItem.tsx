import Card from "@/components/Card";
import Button from "@/components/Button";

export interface ShowcaseItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  subtitle: string,
  description: string,
  image: string,
  highlights?: string[], // tag-like items that stand out in a golden color
  tags: string[],
  caption: string,
  link: string,
}

const ShowcaseItem = ({ title, subtitle, description, image, tags, highlights, caption, link }: ShowcaseItemProps) => {
  return (
    <Card
      className = "fade-in-container"
      style = {{
        padding: "0rem 0rem 0.5rem 0rem",
        display: "flex",
        flexDirection: "column",
        gap: "2.25rem",
      }}
    >
      {/* image */}
      <img
        style = {{
          width: "100%",
          height: "12.5rem",
        }}
        src = {image}
      />

      <div style = {{
        padding: "0rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}>

        {/* text */}
        <div style = {{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
        <p>{description}</p>

        {/* highlights */}
        {highlights && <div style = {{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          {highlights.map((tag, index) => {
            return (
              <div
                key = {index}
                style = {{
                  padding: "0.15rem 0.5rem",
                  borderRadius: "0.25rem",
                  backgroundColor: "oklch(from var(--emphasis) l c h / 0.35)",
                  border: "1px solid var(--emphasis)",
                }}
              >
                <p style = {{ color: "var(--primary)", fontWeight: "400" }}>{tag}</p>
              </div>
            )
          })}
        </div>}

        {/* tags */}
        <div style = {{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          {tags.map((tag, index) => {
            return (
              <div
                key = {index}
                style = {{
                  padding: "0.15rem 0.5rem",
                  borderRadius: "0.25rem",
                  backgroundColor: "oklch(from var(--accent) l c h / 0.35)",
                  border: "1px solid var(--accent)",
                }}
              >
                <p style = {{ color: "var(--primary)", fontWeight: "400" }}>{tag}</p>
              </div>
            )
          })}
        </div>

      </div>

      <div style = {{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        
        paddingRight: "0.5rem",
        flex: 1,
      }}>
        {/* caption */}
        <h4 style = {{
          paddingLeft: "1.5rem",
          lineHeight: "2.75rem",
          textAlign: "center",
          textAnchor: "middle",
        }}>
          {caption}
        </h4>

        {/* link */}
        <Button
          style = {{
            padding: "0rem 2rem",
            whiteSpace: "pre-wrap",
            height: "2.5rem",
          }}
          collapsible = {false}
          label = "Visit  ->"
          onClick = {() => window.open(link, "_blank")}
        />
      </div>
    </Card>
  )
}

export default ShowcaseItem