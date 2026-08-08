import { Box,Text, VStack } from '@chakra-ui/react'
import type { SkillCardData } from '../data/types'

export default function SkillCard({ icon: Icon, title, description }: SkillCardData) {
  return (
    <VStack
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      padding={5}
      gap={2}
      width="200px"
      height="200px"
      flexShrink={0}
    >
      <Box color="brand.700" fontSize="3xl">
        <Icon aria-hidden="true" />
      </Box>
      <Text fontWeight="bold" color="brand.300" letterSpacing="tight" fontSize="lg">
        {title}
      </Text>
      <Text color="black" fontSize="xs">
        {description}
      </Text>
    </VStack>
  )
}
