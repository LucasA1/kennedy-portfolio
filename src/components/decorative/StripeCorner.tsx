import { Box, useToken } from '@chakra-ui/react'

interface StripeCornerProps {
  corner?: 'top-left' | 'top-right'
  colorA?: string
  colorB?: string
  size?: string | number
}

const CLIP_PATHS: Record<NonNullable<StripeCornerProps['corner']>, string> = {
  'top-left': 'polygon(0 0, 100% 0, 0 100%)',
  'top-right': 'polygon(100% 0, 100% 100%, 0 0)',
}

export default function StripeCorner({
  corner = 'top-left',
  colorA = 'blackAlpha.400',
  colorB = 'transparent',
  size = '180px',
}: StripeCornerProps) {
  const [resolvedA, resolvedB] = useToken('colors', [colorA, colorB])

  return (
    <Box
      position="absolute"
      top={0}
      left={corner === 'top-left' ? 0 : undefined}
      right={corner === 'top-right' ? 0 : undefined}
      width={size}
      height={size}
      clipPath={CLIP_PATHS[corner]}
      backgroundImage={`repeating-linear-gradient(45deg, ${resolvedA} 0 8px, ${resolvedB} 8px 16px)`}
      pointerEvents="none"
      aria-hidden="true"
    />
  )
}
