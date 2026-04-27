interface IconProps {
  svg: string,
  color?: string,
  width?: string,
  height?: string,
  style?: React.CSSProperties,
}

const IconSVG = ({ svg, color, width, height, style }: IconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{
        width: width,
        height: height,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    />
  )
}

export default IconSVG