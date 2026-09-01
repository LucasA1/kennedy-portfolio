import { Box, Text, VStack, type StackProps } from '@chakra-ui/react'
import type { SkillCardData } from '../data/types'

type SkillCardProps = SkillCardData & Omit<StackProps, 'children'>

export default function SkillCard({ icon: Icon, title, description, ...rest }: SkillCardProps) {
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
      {...rest}
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
