import type { ReactNode } from 'react'
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
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
      <Image
        src="/images/home/hero-top-left.svg"
        alt=""
        aria-hidden="true"
        pointerEvents="none"
        position="absolute"
        top={0}
        left={0}
        width="50%"
        zIndex={0}
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
          <Heading 
            as="h1" 
            color="white" 
            letterSpacing="tight"
            fontSize={{ base: '3xl', md: '5xl' }}
          >
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
          <Box
            aria-hidden="true"
            flexShrink={0}
            width={{ base: '100%', md: '440px' }}
            height={{ base: '240px', md: 'auto' }}
            alignSelf="stretch"
          />
        )}
      </Flex>
      {image && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="100%"
          maxWidth="1200px"
          marginX="auto"
          paddingX={{ base: 4, md: 8 }}
          pointerEvents="none"
          zIndex={0}
        >
          <Box position="absolute" bottom={0} right={{ base: 4, md: 0 }} width={{ base: '280px', md: '440px' }}>
            <Image
              src="/images/home/hero-behind-image.svg"
              alt=""
              aria-hidden="true"
              display="block"
              width="100%"
            />
            <Box position="absolute" bottom={0} right="15%" width="75%">
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                aspectRatio={0.87}
                borderRadius="none"
                showLabel={false}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
