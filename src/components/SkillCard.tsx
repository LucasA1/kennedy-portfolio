import { Box,Text, VStack } from '@chakra-ui/react'
import type { SkillCardData } from '../data/types'

export default function SkillCard({ icon: Icon, title, description }: SkillCardData) {
  return (
    <VStack
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      padding={6}
      gap={3}
      width="240px"
      height="250px"
      flexShrink={0}
    >
      <Box color="brand.700" fontSize="4xl">
        <Icon aria-hidden="true" />
      </Box>
      <Text fontWeight="bold" color="brand.400" letterSpacing="tight" fontSize="xl">
        {title}
      </Text>
      <Text color="black" fontSize="sm">
        {description}
      </Text>
    </VStack>
  )
}
