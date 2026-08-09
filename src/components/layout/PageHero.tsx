import type { ReactNode } from 'react'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
import BlobShape from '../decorative/BlobShape'
import PlaceholderImage from '../decorative/PlaceholderImage'
import type { ContentImage } from '../../data/types'

interface PageHeroProps {
  bg: string
  eyebrow: string
  title: string
  children?: ReactNode
  showStripeCorner?: boolean
  showBlob?: boolean
  minHeight?: string
  image?: ContentImage
}

export default function PageHero({
  bg,
  eyebrow,
  title,
  children,
  minHeight = '280px',
  image,
}: PageHeroProps) {
  return (
    <Box as="section" position="relative" bg={bg} overflow="hidden" minHeight={minHeight}>
      <BlobShape
        fill="coral.400"
        size="200%"
        top="-125%"
        left="-100%"
        pattern="striped"
        stripeWidth={1}
        stripeDirection="diagonal-right-left"
        shape="blob-2"
      />
      <BlobShape
        fill="brand.300"
        size="420px"
        top="220px"
        right="240px"
        shape="blob-3"
      />
      <BlobShape
        fill="white"
        size="320px"
        top="120px"
        right="380px"
        pattern="dots"
      />
      <Header />
      <Flex
        align="center"
        justify="space-between"
        gap={8}
        direction={{ base: 'column', md: 'row' }}
        position="relative"
        zIndex={1}
        maxWidth="1200px"
        marginX="auto"
        paddingX={{ base: 4, md: 8 }}
        paddingTop={{ base: 8, md: 12 }}
        paddingBottom={{ base: 10, md: 16 }}
      >
        <VStack align="start" gap={2} flex="1">
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
        {image && (
          <Box flexShrink={0} width={{ base: '220px', md: '280px' }}>
            <PlaceholderImage src={image.src} alt={image.alt} aspectRatio={1} borderRadius="full" showLabel={false} />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
