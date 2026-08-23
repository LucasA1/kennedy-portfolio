import { useState } from 'react'
import { AspectRatio, Box, Image, Text, type BoxProps } from '@chakra-ui/react'

const PLACEHOLDER_SHADES = ['brand.200', 'coral.100', 'coral.400', 'slate.900'] as const

function shadeForLabel(label: string) {
  let hash = 0
  for (let i = 0; i < label.length; i++) {
    hash = (hash + label.charCodeAt(i)) % PLACEHOLDER_SHADES.length
  }
  return PLACEHOLDER_SHADES[hash]
}

interface PlaceholderImageProps {
  src?: string
  alt: string
  aspectRatio?: number
  borderRadius?: string | number
  /** Set false when a caption is already rendered elsewhere (e.g. CategoryTile's overlay label), to avoid duplicate/colliding text. */
  showLabel?: boolean
  /**
   * Renders as a flex item that grows in width proportionally to its own aspect ratio, at a
   * shared fixed height, so a row of mixed-aspect images (e.g. gallery grids) fills the full
   * width of its flex container edge-to-edge without cropping. Parent must be `display: flex`.
   */
  justified?: boolean
  /** Shared row height used when `justified` is set. */
  rowHeight?: BoxProps['height']
  /** Flex-basis used at the `base` breakpoint when `justified` is set, e.g. to stack images or pair them up on mobile. Defaults to '100%' (one per row). */
  mobileBasis?: string
  /** CSS `order` override, keyed by breakpoint, applied when `justified` is set. */
  order?: BoxProps['order']
}

export default function PlaceholderImage({
  src,
  alt,
  aspectRatio,
  borderRadius = 'md',
  showLabel = true,
  justified,
  rowHeight,
  mobileBasis = '100%',
  order,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(!src)
  const [measuredRatio, setMeasuredRatio] = useState(aspectRatio)

  const fallback = (
    <Box
      bg={shadeForLabel(alt)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={4}
      width="100%"
      height="100%"
    >
      {showLabel && (
        <Text fontSize="sm" color="slate.900" textAlign="center" fontWeight="medium">
          {alt}
        </Text>
      )}
    </Box>
  )

  if (justified) {
    const ratio = measuredRatio ?? 1.5
    return (
      <Box
        flex={{ base: `0 0 ${mobileBasis}`, md: `${ratio} 1 0px` }}
        minWidth={0}
        height={{ base: 'auto', md: rowHeight }}
        aspectRatio={{ base: ratio, md: undefined }}
        order={order}
        borderRadius={borderRadius}
        overflow="hidden"
      >
        {failed || !src ? (
          fallback
        ) : (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            width="100%"
            height={{ base: 'auto', md: '100%' }}
            objectFit={{ base: 'cover', md: 'contain' }}
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget
              if (naturalWidth && naturalHeight) setMeasuredRatio(naturalWidth / naturalHeight)
            }}
            onError={() => setFailed(true)}
          />
        )}
      </Box>
    )
  }

  if (!aspectRatio) {
    return (
      <Box width="100%" borderRadius={borderRadius} overflow="hidden">
        {failed || !src ? (
          <AspectRatio ratio={4 / 3}>{fallback}</AspectRatio>
        ) : (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            width="100%"
            height="auto"
            display="block"
            onError={() => setFailed(true)}
          />
        )}
      </Box>
    )
  }

  return (
    <AspectRatio ratio={aspectRatio} width="100%" borderRadius={borderRadius} overflow="hidden">
      {failed || !src ? (
        fallback
      ) : (
        <Image
          src={src}
          alt={alt}
          loading="lazy"
          objectFit="cover"
          onError={() => setFailed(true)}
        />
      )}
    </AspectRatio>
  )
}
