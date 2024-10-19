import { useRef } from "react"
import { Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { range } from "d3-array"
import { useDebounceCallback, useResizeObserver } from "usehooks-ts"

export default function BinaryGrid({ columns = 14, rows = 4, ...props }) {
  const smColumns = Math.max(columns - 6, 0)
  const mdColumns = Math.max(columns - smColumns - 2, 0)
  const lgColumns = Math.max(columns - smColumns - mdColumns, 0)

  const backgroundGridColumns = [
    range(smColumns)
      .map(() => "var(--grid-size-sm)")
      .join(" 0.0625rem "),
    range(mdColumns)
      .map(() => "var(--grid-size-md)")
      .join(" 0.0625rem "),
    range(lgColumns)
      .map(() => "var(--grid-size-lg)")
      .join(" 0.0625rem "),
  ]
    .filter((d) => d)
    .join(" 0.0625rem ")

  const backgroundGridRows = range(rows)
    .map(() => "var(--grid-size-sm)")
    .join(" 0.0625rem ")

  const baseStyleY = {
    background: "currentcolor",
    gridRow: "1 / -1",
    transformOrigin: "top",
  }

  const baseStyleX = {
    background: "currentcolor",
    transformOrigin: "left",
  }

  const transitionConfig = { duration: 0, bounce: 0, type: "spring" }

  // const delay = 0.03

  const ref = useRef(null)

  const onResize = useDebounceCallback(({ width, height }) => {
    // ref.current.style.setProperty("--grid-size-sm", `calc((100vw - (23 * 0.0625rem)) / 24)`)
    // ref.current.style.setProperty("--grid-size-md", `calc((100vw - (11 * 0.0625rem)) / 12)`)
    // ref.current.style.setProperty("--grid-size-lg", `calc((100vw - (5 * 0.0625rem)) / 6)`)
    if (!ref.current) return
    ref.current.style.setProperty(
      "--grid-size-sm",
      `calc((${width}px - (23 * 0.0625rem)) / 24)`
    )
    ref.current.style.setProperty(
      "--grid-size-md",
      `calc((${width}px - (11 * 0.0625rem)) / 12)`
    )
    ref.current.style.setProperty(
      "--grid-size-lg",
      `calc((${width}px - (5 * 0.0625rem)) / 6)`
    )
    ref.current.style.setProperty("opacity", 1)
    ref.current.style.removeProperty("aspect-ratio")
  }, 300)

  useResizeObserver({ ref, onResize, box: "border-box" })

  const totalColumnCount = smColumns + mdColumns * 2 + lgColumns * 4

  return (
    <Grid
      ref={ref}
      display={["none", null, "grid"]}
      gridColumn="1 / -1"
      bg="white"
      color="gray.300"
      gridTemplateColumns={backgroundGridColumns}
      gridTemplateRows={backgroundGridRows}
      boxShadow="inset -0.0625rem 0 0 0 var(--chakra-colors-gray-200), inset 0.0625rem 0 0 0 var(--chakra-colors-gray-200), 0 0.0625rem 0 0 var(--chakra-colors-gray-200)"
      style={{
        opacity: 0,
        aspectRatio: totalColumnCount / rows,
      }}
      {...props}
    >
      {range(smColumns + mdColumns + lgColumns - 1).map((col) => {
        return (
          <motion.div
            key={col}
            style={{ ...baseStyleY, gridColumnStart: `${(col + 1) * 2}` }}
            animate={{ scaleY: [0, 1] }}
            transition={{
              ...transitionConfig,
              // delay: col * delay,
            }}
          />
        )
      })}
      {range(rows - 1).map((row) => {
        const isLong = !((row + 1) % 2)
        const isVeryLong = !((row + 1) % 4)
        return (
          <motion.div
            key={row}
            style={{
              ...baseStyleX,
              gridRowStart: `${(row + 1) * 2}`,
              gridColumn: `1 / span ${
                isVeryLong
                  ? smColumns * 2 + mdColumns * 2 + lgColumns * 2
                  : isLong
                  ? smColumns * 2 + mdColumns * 2
                  : smColumns * 2
              }`,
            }}
            animate={{ scaleX: [0, 1] }}
            transition={{
              ...transitionConfig,
              // delay: row * delay,
            }}
          />
        )
      })}
    </Grid>
  )
}
