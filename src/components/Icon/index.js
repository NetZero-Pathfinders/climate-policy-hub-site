import { Box } from "@chakra-ui/react"

export function Icon({
  size = "1.25rem",
  viewBox = "0 0 24 24",
  stroke = "currentcolor",
  strokeWidth = 2,
  strokeLinecap = "butt",
  strokeLinejoin = "bevel",
  children,
  isAnimated,
  className,
  ...restProps
}) {
  const size2 = [size].flat()
  const strokeWidth2 = [strokeWidth].flat()
  const fontSize = strokeWidth2.map((d) => (d ? d * 0.0625 + "rem" : d))
  return (
    <Box
      xmlns="http://www.w3.org/2000/svg"
      as="svg"
      w={size2}
      h={size2}
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      fill="none"
      sx={{
        "circle, path, rect, text, line": {
          fontSize,
          vectorEffect: "non-scaling-stroke",
          strokeWidth: "1em",
        },
      }}
      className={`${className}${
        isAnimated ? ` is-animated-${isAnimated}` : ""
      }`}
      {...restProps}
    >
      {children}
    </Box>
  )
}

export const ChevronLeftIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M15 18l-6-6 6-6" />
  </Icon>
)

export const ChevronRightIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M9 18l6-6-6-6" />
  </Icon>
)

export const ChevronDownIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
)

export const ChevronUpIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M18 15l-6-6-6 6" />
  </Icon>
)

export const ArrowRightIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M5 12h13m-6-7l7 7-7 7" />
  </Icon>
)

export const ArrowLeftIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </Icon>
)

export const CloseIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M18,6L6,18M6,6L18,18" />
    </Icon>
  )
}

export const ExternalLinkIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M18 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h5m5-3h6v6m-11 5L20.2 3.8" />
    </Icon>
  )
}

export const DownloadIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 002-2v-4m-4-6l-5 5-5-5m5 3.8V2.5" />
    </Icon>
  )
}

export const EnvelopeIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6L12 13 2 6" />
      </g>
    </Icon>
  )
}

export const MenuIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      {/* <line x1={2} x2={22} y1={8} y2={8} /> */}
      {/* <line x1={4} x2={20} y1={12} y2={12} /> */}
      {/* <line x1={2} x2={22} y1={16} y2={16} /> */}
      <path d="M2,8L22,8M2,16L22,16" />
    </Icon>
  )
}

export const PromoteIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
        <path
          d="M14.3219 2.65146C14.3219 3.91249 13.2809 4.93475 11.9969 4.93475C10.7128 4.93475 9.67188 3.91249 9.67188 2.65146C9.67188 1.39043 10.7128 0.368164 11.9969 0.368164C13.2809 0.368164 14.3219 1.39043 14.3219 2.65146Z"
          stroke-dasharray="2 2"
        />
        <path
          d="M14.9968 15.4679H16.7593L16.1968 8.47065C16.0843 7.07121 14.9219 6.04004 13.4969 6.04004H10.4969C9.07187 6.04004 7.90938 7.10804 7.79687 8.47065L7.23438 15.4679H9.03437"
          stroke-dasharray="2 2"
        />
        <path
          d="M15.1117 13.7002L14.3617 23.2016H9.63672L8.88672 13.7002"
          stroke-dasharray="2 2"
        />
        <path
          d="M21.1851 3.35111C21.1851 4.51044 20.2281 5.45026 19.0476 5.45026C17.8671 5.45026 16.9102 4.51044 16.9102 3.35111C16.9102 2.19177 17.8671 1.25195 19.0476 1.25195C20.2281 1.25195 21.1851 2.19177 21.1851 3.35111Z"
        />
        <path
          d="M21.7852 15.2098H23.3977L22.8726 8.76502C22.7602 7.47607 21.7102 6.51855 20.3977 6.51855H17.6602"
        />
        <path
          d="M21.8962 13.5889L21.2211 22.317H16.8711L16.4961 17.3452"
        />
        <path
          d="M7.08747 3.35111C7.08747 4.51044 6.13049 5.45026 4.94999 5.45026C3.76948 5.45026 2.8125 4.51044 2.8125 3.35111C2.8125 2.19177 3.76948 1.25195 4.94999 1.25195C6.13049 1.25195 7.08747 2.19177 7.08747 3.35111Z"
        />
        <path
          d="M6.29763 6.55566H3.59764C2.28514 6.55566 1.23515 7.51318 1.12265 8.80213L0.597656 15.21H2.21015"
        />
        <path
          d="M7.49763 17.3452L7.12263 22.317H2.77266L2.09766 13.5889"
        />
      </g>
    </Icon>
  )
}

export const AccelerateIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
        <path d="M4.8 23.197L.786 16.2a2.596 2.596 0 01-.375-1.51l.075-6.443c0-.589.487-1.067 1.087-1.067s1.088.478 1.088 1.067v6.37l4.2 4.16-2.1-2.061a1.273 1.273 0 01.037-1.841 1.32 1.32 0 011.838.073l2.85 3.093c.75.81 1.162 1.841 1.125 2.945v2.21M13.39 23.196l-.038-2.172c0-1.068.412-2.136 1.125-2.946l2.85-3.092c.487-.516 1.275-.553 1.837-.074.563.478.563 1.325.038 1.84l-2.1 2.063 4.274-4.198V8.285c0-.59.488-1.068 1.088-1.068.6 0 1.088.478 1.088 1.068l.075 6.406a3.11 3.11 0 01-.375 1.51l-4.05 6.995" />
        <path d="M12 .37s10.575 13.695 0 13.511C1.462 14.065 12 .37 12 .37zM12.04 2.505v14.47M9.75 6.076l2.287 1.804M8.477 9.315l3.562 2.799M14.327 6.076L12.039 7.88M15.602 9.315l-3.563 2.799" />
      </g>
    </Icon>
  )
}

export const IncreaseIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
        <path d="M7.577 18.337L6.34 21c-.113.262-.45.487-.713.487H.677c-.112 0-.225-.037-.262-.112-.038-.075-.038-.225 0-.338l3.975-8.512c.112-.263.45-.488.712-.488h4.575" />
        <path d="M12 15.113l-1.238-2.588c-.113-.263-.45-.525-.75-.525H5.099c-.262 0-.412.225-.262.525L8.812 21c.075.15.187.262.3.375.075.038.187.113.3.15" />
        <path d="M16.39 18.337L15.152 21c-.112.262-.45.487-.712.487H9.49c-.113 0-.225-.037-.263-.112-.037-.075-.037-.225 0-.338l3.975-8.512c.113-.263.45-.488.713-.488h.787" />
        <path d="M18.374 21.488h4.95c.263 0 .413-.226.263-.526l-3.975-8.437c-.113-.263-.45-.525-.75-.525h-4.95c-.263 0-.413.225-.263.525L17.624 21c.113.262.45.488.75.488zM11.962 8.888l-1.238 2.625c-.112.262-.45.487-.712.487H5.099c-.112 0-.225-.037-.262-.112-.038-.075-.038-.225 0-.338L8.812 3c.112-.262.45-.487.712-.487h.638" />
        <path d="M13.951 12h4.95c.262 0 .413-.225.262-.525l-4.012-8.437c-.15-.263-.45-.525-.75-.525h-4.95c-.263 0-.412.225-.263.525l4.013 8.475c.15.262.487.487.75.487z" />
      </g>
    </Icon>
  )
}

export const FosterIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
        <path d="M9.86 6.896v3.011H6.71M3.562 9.907H.375V.615h9.487v3.012M17.212 9.907h-3.075V6.822M14.137 3.737V.615h9.487v9.292H20.55M9.86 17.105v-3.011H6.71M3.562 14.094H.375v9.292h9.487v-3.012M17.212 14.094h-3.075v3.085M14.137 20.264v3.122h9.487v-9.292H20.55" />
        <path d="M5.52 3.68c.887.205 1.436 1.076 1.227 1.944-.21.869-1.098 1.407-1.985 1.201-.887-.205-1.436-1.075-1.227-1.944.21-.868 1.099-1.406 1.985-1.2zM6.788 18.721c0 .893-.738 1.616-1.65 1.616-.911 0-1.65-.723-1.65-1.616 0-.892.739-1.616 1.65-1.616.912 0 1.65.724 1.65 1.616zM20.51 5.28c0 .892-.738 1.615-1.65 1.615-.91 0-1.65-.723-1.65-1.616 0-.892.74-1.616 1.65-1.616.912 0 1.65.724 1.65 1.616zM19.239 17.177c.887.205 1.436 1.076 1.227 1.944-.21.869-1.099 1.407-1.985 1.202-.887-.206-1.436-1.076-1.227-1.944.21-.869 1.098-1.407 1.985-1.202zM8.363 5.28h7.275M8.363 18.722h7.275M5.137 15.563V8.436M18.863 15.563V8.436" />
      </g>
    </Icon>
  )
}

export const EnhanceIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M23.298 12c0 6.42-5.132 11.625-11.463 11.625C5.503 23.625.37 18.42.37 12S5.504.375 11.835.375C18.165.375 23.298 5.58 23.298 12zM16.677 13.613H6.988M16.677 10.388H6.988" />
    </Icon>
  )
}
