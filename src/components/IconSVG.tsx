interface IconProps {
  svg: string,
  color?: string,
  width?: string,
  height?: string,
  style?: React.CSSProperties,
}

const IconSVG = ({ svg, color = "var(--primary)", width, height, style }: IconProps) => {
  return (
    <div
      dangerouslySetInnerHTML = {{ __html: svg }}
      style = {{
        width: width,
        height: height,
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        transition: "none",
        ...style,
      }}
    />
  )
}

export default IconSVG