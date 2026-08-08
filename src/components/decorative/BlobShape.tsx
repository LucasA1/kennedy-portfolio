import { useId } from 'react'
import { Box, useToken, type BoxProps } from '@chakra-ui/react'

export const BLOB_PATH =
  'M45.9,-58.6C58.9,-49.5,68.4,-34.6,71.9,-18.4C75.3,-2.2,72.6,15.3,64.3,29.7C56,44.1,42,55.4,26.1,62.5C10.2,69.6,-7.6,72.5,-23.9,68C-40.2,63.5,-55,51.6,-63.8,36.4C-72.6,21.2,-75.4,2.7,-71.5,-13.8C-67.6,-30.3,-57,-44.8,-43.3,-54C-29.6,-63.2,-14.8,-67.1,1.7,-69.3C18.2,-71.5,32.9,-67.7,45.9,-58.6Z'

export type BlobPattern = 'solid' | 'striped' | 'dots' | 'outline'

interface BlobShapeProps extends Omit<BoxProps, 'position'> {
  fill?: string
  size?: string | number
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  /** SVG path data drawn in a -80,-80 160x160 viewBox. Defaults to the standard blob shape. */
  path?: string
  /** Visual treatment applied to the shape's fill. */
  pattern?: BlobPattern
  /** Stroke width used for the `outline` pattern. */
  strokeWidth?: number
}

export default function BlobShape({
  fill = 'brand.200',
  size = '110%',
  top,
  bottom,
  left,
  right,
  path = BLOB_PATH,
  pattern = 'solid',
  strokeWidth = 2,
  ...rest
}: BlobShapeProps) {
  const [resolvedFill] = useToken('colors', [fill])
  const patternId = useId()

  return (
    <Box
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={size}
      height={size}
      zIndex={0}
      pointerEvents="none"
      aria-hidden="true"
      {...rest}
    >
      <svg viewBox="-80 -80 160 160" width="100%" height="100%">
        {pattern === 'striped' && (
          <pattern id={patternId} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill={resolvedFill} opacity={0} />
            <rect width="4" height="8" fill={resolvedFill} />
          </pattern>
        )}
        {pattern === 'dots' && (
          <pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill={resolvedFill} opacity={0} />
            <circle cx="2.5" cy="2.5" r="2" fill={resolvedFill} />
          </pattern>
        )}
        <path
          d={path}
          fill={
            pattern === 'outline'
              ? 'none'
              : pattern === 'solid'
                ? resolvedFill
                : `url(#${patternId})`
          }
          stroke={pattern === 'outline' ? resolvedFill : undefined}
          strokeWidth={pattern === 'outline' ? strokeWidth : undefined}
        />
      </svg>
    </Box>
  )
}
