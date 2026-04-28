import Card from "@/components/Card";
import IconSVG from "@/components/IconSVG";

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  svg: string,
  label: string,
}

const SkillCard = ({ svg, label }: SkillCardProps) => {
  return (
    <Card
      style = {{
        height: "2rem",
        fontSize: "1.25rem",

        borderRadius: "0.75rem",
        padding: "1.35rem 1rem",

        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textWrap: "nowrap",
      }}
    >
      <span>
        {svg && <IconSVG svg = {svg} color = "var(--primary)" width = {"2rem"} height = {"2rem"}/>}
      </span>
      <span>
        {label}
      </span>
    </Card>
  )
}

export default SkillCard