import { Box, useToken } from '@chakra-ui/react'

interface WavyDividerProps {
  fill?: string
  flip?: boolean
}

export default function WavyDivider({ fill = 'coral.400', flip = false }: WavyDividerProps) {
  const [resolvedFill] = useToken('colors', [fill])

  return (
    <Box width="100%" height={{ base: '40px', md: '60px' }} overflow="hidden" lineHeight={0}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ display: 'block', transform: flip ? 'scaleY(-1)' : undefined }}
        aria-hidden="true"
      >
        <path
          d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,56 L1440,120 L0,120 Z"
          fill={resolvedFill}
        />
      </svg>
    </Box>
  )
}
