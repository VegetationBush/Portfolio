import IconSVG from "@/components/IconSVG";

export interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  svg: string,
  label: string,
}

const ContactItem = ({ svg, label }: ContactItemProps) => {
  return (
    <div
      style = {{
        height: "2rem",

        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textWrap: "nowrap",
      }}
    >
      <span>
        <IconSVG
          svg = {svg}
          width = "1.5rem"
          height = "1.5rem"
        />
      </span>
      <p>{label}</p>
    </div>
  )
}

export default ContactItem