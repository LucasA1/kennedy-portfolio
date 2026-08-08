import { useState } from 'react'
import { AspectRatio, Box, Image, Text } from '@chakra-ui/react'

const PLACEHOLDER_SHADES = ['brand.100', 'brand.200', 'coral.100', 'coral.200', 'slate.200'] as const

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
}

export default function PlaceholderImage({
  src,
  alt,
  aspectRatio = 4 / 3,
  borderRadius = 'md',
  showLabel = true,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(!src)

  return (
    <AspectRatio ratio={aspectRatio} width="100%" borderRadius={borderRadius} overflow="hidden">
      {failed || !src ? (
        <Box
          bg={shadeForLabel(alt)}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={4}
        >
          {showLabel && (
            <Text fontSize="sm" color="slate.700" textAlign="center" fontWeight="medium">
              {alt}
            </Text>
          )}
        </Box>
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
