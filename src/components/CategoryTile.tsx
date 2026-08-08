import { Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { CategorySummary } from '../data/types'
import PlaceholderImage from './decorative/PlaceholderImage'

interface CategoryTileProps {
  category: CategorySummary
}

export default function CategoryTile({ category }: CategoryTileProps) {
  return (
    <Box
      asChild
      position="relative"
      display="block"
      borderRadius="md"
      overflow="hidden"
      role="group"
      _hover={{ transform: 'scale(1.02)' }}
      transition="transform 0.15s ease"
    >
      <RouterLink to={`/portfolio/${category.slug}`}>
        <PlaceholderImage
          src={category.thumbnailSrc}
          alt={category.thumbnailAlt}
          aspectRatio={4 / 3}
          borderRadius="md"
          showLabel={false}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="to-t"
          gradientFrom="blackAlpha.700"
          gradientTo="transparent"
          gradientVia="transparent"
          pointerEvents="none"
        />
        <Text
          position="absolute"
          bottom={3}
          left={3}
          right={3}
          color="white"
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {category.name}
        </Text>
      </RouterLink>
    </Box>
  )
}
