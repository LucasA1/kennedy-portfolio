import { Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { CategorySummary, ContentImage } from '../data/types'
import PlaceholderImage from './decorative/PlaceholderImage'

interface CategoryTileProps {
  category: CategorySummary
  image?: ContentImage
}

export default function CategoryTile({ category, image }: CategoryTileProps) {
  const thumbnailSrc = image?.src ?? category.thumbnailSrc
  const thumbnailAlt = image?.alt ?? category.thumbnailAlt
  const [firstWord, ...restWords] = category.name.split(' ')
  const twoLineName = `${firstWord}\n${restWords.join(' ')}`

  return (
    <Box
      asChild
      position="relative"
      display="block"
      borderRadius="2xl"
      overflow="hidden"
      role="group"
      width="100%"
      _hover={{ transform: 'scale(1.02)' }}
      transition="transform 0.15s ease"
    >
      <RouterLink to={`/portfolio/${category.slug}`}>
        <PlaceholderImage
          src={thumbnailSrc}
          alt={thumbnailAlt}
          aspectRatio={1}
          borderRadius="md"
          showLabel={false}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="to-t"
          gradientFrom="blackAlpha.800"
          gradientTo="blackAlpha.50"
          pointerEvents="none"
        />
        <Text
          position="absolute"
          bottom={4}
          left={0}
          right={0}
          textAlign="center"
          whiteSpace="pre-line"
          lineHeight="short"
          color="white"
          fontWeight="bold"
          fontSize="lg"
          textTransform="uppercase"
        >
          {twoLineName}
        </Text>
      </RouterLink>
    </Box>
  )
}
