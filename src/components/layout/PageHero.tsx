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
          top="220px"
          right="240px"
          path="M 45.9 -58.6 c 13 9.1 22.5 24 26 40.2 C 75.3 -2.2 72.6 15.3 56 55 C 52 56 52 56 22 56 C 5 56 5 56 -11 56 C -46 56 -46 56 -62 56 C -78 20 -49 -5 -45 -10 C -28 -22 -28 -19 -18 -34 C -9 -55 -14.8 -67.1 14 -71 C 18.2 -71.5 32.9 -67.7 45.9 -58.6 Z"
        />
      )} 
      {showBlob && (
        <BlobShape
          fill="white"
          size="320px"
          top="120px"
          right="380px"
          pattern="dots"
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
