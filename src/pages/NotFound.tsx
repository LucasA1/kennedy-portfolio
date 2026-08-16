import { Button, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'

export default function NotFound() {
  return (
    <PageHero bg="brand.700" eyebrow="404" title="Page not found" showStripeCorner minHeight="400px">
      <VStack align="start" gap={4}>
        <Text color="whiteAlpha.900">
          The page you're looking for doesn't exist or has moved.
        </Text>
        <Button asChild variant="outline" borderRadius="full" paddingX={6}>
          <RouterLink to="/">Back home</RouterLink>
        </Button>
      </VStack>
    </PageHero>
  )
}
