import { Box,Text, VStack } from '@chakra-ui/react'
import type { SkillCardData } from '../data/types'

export default function SkillCard({ icon: Icon, title, description }: SkillCardData) {
  return (
    <VStack
      gap={3}
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      padding={6}
      height="100%"
      minWidth="200px"
      maxHeight="200px"
    >
      <Box color="brand.700" fontSize="2xl">
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
