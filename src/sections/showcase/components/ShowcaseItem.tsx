import Card from "@/components/Card";

export interface ShowcaseItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  subtitle: string,
  description: string,
  image: string,
}



const ShowcaseItem = ({ title, subtitle, description, image }: ShowcaseItemProps) => {

  return (
    <Card
      style = {{
        height: "2rem",

        padding: "1.25rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textWrap: "nowrap",
      }}
    >
      {title} {subtitle} {description} {image}
    </Card>
  )
}

export default ShowcaseItem