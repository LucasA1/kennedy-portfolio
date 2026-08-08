import type { ReactNode } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
import StripeCorner from '../decorative/StripeCorner'
import BlobShape from '../decorative/BlobShape'

interface PageHeroProps {
  bg: string
  eyebrow: string
  title: string
  children?: ReactNode
  showStripeCorner?: boolean
  showBlob?: boolean
  minHeight?: string
}

export default function PageHero({
  bg,
  eyebrow,
  title,
  children,
  showStripeCorner = false,
  showBlob = true,
  minHeight = '280px',
}: PageHeroProps) {
  return (
    <Box as="section" position="relative" bg={bg} overflow="hidden" minHeight={minHeight}>
      {showStripeCorner && <StripeCorner corner="top-left" colorA="coral.400" colorB="transparent" />}
      {showBlob && (
        <BlobShape
          fill="brand.300"
          size="420px"
          top="-120px"
          right="-140px"
        />
      )}
      <Header />
      <VStack
        align="start"
        gap={2}
        position="relative"
        zIndex={1}
        maxWidth="1200px"
        marginX="auto"
        paddingX={{ base: 4, md: 8 }}
        paddingTop={{ base: 8, md: 12 }}
        paddingBottom={{ base: 10, md: 16 }}
      >
        <Heading as="h1" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
          {title}
        </Heading>
        <Text
          color="whiteAlpha.900"
          fontWeight="semibold"
          fontSize="sm"
          letterSpacing="wide"
          textTransform="uppercase"
          paddingTop={4}
          paddingBottom={2}
        >
          {eyebrow}
        </Text>
        {children}
      </VStack>
    </Box>
  )
}
