import { useId } from 'react'
import { Box, useToken, type BoxProps } from '@chakra-ui/react'

/** Named SVG path presets, each drawn in a -80,-80 160x160 viewBox. */
export const BLOB_SHAPES = {
  'blob-1': 
    'M45.9,-58.6C58.9,-49.5,68.4,-34.6,71.9,-18.4C75.3,-2.2,72.6,15.3,64.3,29.7C56,44.1,42,55.4,26.1,62.5C10.2,69.6,-7.6,72.5,-23.9,68C-40.2,63.5,-55,51.6,-63.8,36.4C-72.6,21.2,-75.4,2.7,-71.5,-13.8C-67.6,-30.3,-57,-44.8,-43.3,-54C-29.6,-63.2,-14.8,-67.1,1.7,-69.3C18.2,-71.5,32.9,-67.7,45.9,-58.6Z',
  'blob-2':
    'm 0 64.5 c 10 0.5 15 0.5 23 -3.5 c 14.5 -14.5 15 -22 23.5 -27.5 c 15 -12 15 2.5 26 -0.5 c 8.5 -7 6.5 -14.5 6 -33 l -78.5 0 z',
  'blob-3':
    'M 45.9 -58.6 c 13 9.1 22.5 24 26 40.2 C 75.3 -2.2 72.6 15.3 56 55 C 52 56 52 56 22 56 C 5 56 5 56 -11 56 C -46 56 -46 56 -62 56 C -78 20 -49 -5 -45 -10 C -28 -22 -28 -19 -18 -34 C -9 -55 -14.8 -67.1 14 -71 C 18.2 -71.5 32.9 -67.7 45.9 -58.6 Z',
  'blob-4':
    'M-41.964 59.588C-50.59 53.904-56.47 50.964-61.514 26.592-62.744-.788-58.072-19.45-46.276-37.966-36.772-55.006-25.08-62.16-13.64-65.28.4-67.88 17.56-64.76 22.76-28.88 25.36-6.52 42.52-4.96 61-2 82 0 107.744 27.574 68 60 52.198 69.356 40.73 71.978 23.852 74.436 9.106 74.272 3.862 73.616-15.69 70.456-22.95 69.782-29.616 67.234-35.3 64.294Z',
  'blob-5':
    'M 30 -70 C 55 -60 65 -30 60 0 C 55 35 40 65 5 72 C -30 78 -65 55 -72 20 C -78 -10 -65 -45 -35 -62 C -10 -75 15 -78 30 -70 Z',
} as const satisfies Record<string, string>

export type BlobShapeName = keyof typeof BLOB_SHAPES

export type BlobPattern = 'solid' | 'striped' | 'dots' | 'outline'

/** Direction of the stripe bars, only used when pattern === 'striped'. */
export type StripeDirection = 'up-down' | 'left-right' | 'diagonal-left-right' | 'diagonal-right-left'

const STRIPE_ROTATIONS: Record<StripeDirection, number> = {
  'up-down': 0,
  'left-right': 90,
  'diagonal-left-right': 45,
  'diagonal-right-left': -45,
}

interface BlobShapeProps extends Omit<BoxProps, 'position' | 'transform'> {
  fill?: string
  size?: string | number
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  /** Named preset from BLOB_SHAPES. Ignored if `path` is provided. */
  shape?: BlobShapeName
  /** SVG path data drawn in a -80,-80 160x160 viewBox. Overrides `shape` when set. */
  path?: string
  /** Visual treatment applied to the shape's fill. */
  pattern?: BlobPattern
  /** Stroke width used for the `outline` pattern. */
  strokeWidth?: number
  /** Bar direction, only used when pattern === 'striped'. */
  stripeDirection?: StripeDirection
  /** Width (SVG user units) of each stripe bar; the tile size is always 2x this. */
  stripeWidth?: number
  /** Visual scale multiplier applied via CSS transform, independent of `size`. */
  scale?: number
}

export default function BlobShape({
  fill = 'brand.400',
  size = '110%',
  top,
  bottom,
  left,
  right,
  shape = 'blob-1',
  path,
  pattern = 'solid',
  strokeWidth = 2,
  stripeDirection = 'up-down',
  stripeWidth = 4,
  scale = 1,
  ...rest
}: BlobShapeProps) {
  const [resolvedFill] = useToken('colors', [fill])
  const patternId = useId()
  const resolvedPath = path ?? BLOB_SHAPES[shape]
  const tileSize = stripeWidth * 2

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
      transform={scale !== 1 ? `scale(${scale})` : undefined}
      transformOrigin="center"
      {...rest}
    >
      <svg viewBox="-80 -80 160 160" width="100%" height="100%">
        {pattern === 'striped' && (
          <pattern
            id={patternId}
            width={tileSize}
            height={tileSize}
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${STRIPE_ROTATIONS[stripeDirection]})`}
          >
            <rect width={tileSize} height={tileSize} fill={resolvedFill} opacity={0} />
            <rect width={stripeWidth} height={tileSize} fill={resolvedFill} />
          </pattern>
        )}
        {pattern === 'dots' && (
          <pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill={resolvedFill} opacity={0} />
            <circle cx="2.5" cy="2.5" r="2" fill={resolvedFill} />
          </pattern>
        )}
        <path
          d={resolvedPath}
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
