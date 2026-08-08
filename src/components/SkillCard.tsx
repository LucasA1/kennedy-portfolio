import { Box, Text, VStack } from '@chakra-ui/react'
import type { SkillCardData } from '../data/types'

export default function SkillCard({ icon: Icon, title, description }: SkillCardData) {
  return (
    <VStack
      align="start"
      gap={3}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      padding={6}
      height="100%"
    >
      <Box color="brand.500" fontSize="2xl">
        <Icon aria-hidden="true" />
      </Box>
      <Text fontWeight="bold" color="brand.700" fontSize="lg">
        {title}
      </Text>
      <Text color="slate.600" fontSize="sm">
        {description}
      </Text>
    </VStack>
  )
}
