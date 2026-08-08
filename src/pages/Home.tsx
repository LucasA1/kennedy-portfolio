import { Box, Button, HStack, Heading, List, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import BlobShape from '../components/decorative/BlobShape'
import PlaceholderImage from '../components/decorative/PlaceholderImage'
import SkillCard from '../components/SkillCard'
import CategoryTile from '../components/CategoryTile'
import { categories, homeContent } from '../data'

export default function Home() {
  const { hero, skills, about, portfolioPreview } = homeContent

  return (
    <>
      <PageHero bg="brand.800" eyebrow={hero.eyebrow} title={hero.title} showStripeCorner minHeight="480px">
        <VStack align="start" gap={4} maxWidth="560px">
          {hero.paragraphs?.map((paragraph) => (
            <Text key={paragraph} color="whiteAlpha.900">
              {paragraph}
            </Text>
          ))}
          {hero.ctas && (
            <HStack gap={4} paddingTop={2}>
              {hero.ctas.map((cta, index) => (
                <Button
                  key={cta.to}
                  asChild
                  variant={index === 0 ? 'solid' : 'outline'}
                  bg={index === 0 ? 'white' : undefined}
                  color={index === 0 ? 'brand.700' : undefined}
                  _hover={index === 0 ? { bg: 'whiteAlpha.900' } : undefined}
                  borderRadius="full"
                  paddingX={6}
                >
                  <RouterLink to={cta.to}>{cta.label}</RouterLink>
                </Button>
              ))}
            </HStack>
          )}
        </VStack>
      </PageHero>

      <Box as="section" paddingY={{ base: 12, md: 16 }} paddingX={{ base: 4, md: 8 }}>
        <VStack maxWidth="1200px" marginX="auto" align="start" gap={8}>
          <Box>
            <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              {skills.eyebrow}
            </Text>
            <Heading as="h2" size="xl" color="brand.700">
              {skills.heading}
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} width="100%">
            <List.Root color="slate.600" paddingLeft={4}>
              {skills.bullets.map((bullet) => (
                <List.Item key={bullet}>{bullet}</List.Item>
              ))}
            </List.Root>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
              {skills.cards.map((card) => (
                <SkillCard key={card.title} {...card} />
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box as="section" bg="coral.100" paddingY={{ base: 12, md: 16 }} paddingX={{ base: 4, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 12 }}
          maxWidth="1200px"
          marginX="auto"
          alignItems="center"
        >
          <Box position="relative">
            <BlobShape fill="coral.300" size="115%" top="-8%" left="-8%" />
            <Box position="relative" zIndex={1} maxWidth="360px">
              <PlaceholderImage src="/images/home/about-photo.jpg" alt="Portrait of Kennedy Papian" aspectRatio={3 / 4} borderRadius="lg" />
            </Box>
          </Box>

          <VStack align="start" gap={4}>
            <Text color="brand.600" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              {about.eyebrow}
            </Text>
            <Heading as="h2" size="xl" color="brand.700">
              {about.heading}
            </Heading>
            <HStack gap={6} flexWrap="wrap">
              {about.meta.map((item) => (
                <HStack key={item.label} gap={2} color="slate.700">
                  <item.icon aria-hidden="true" />
                  <Box>
                    <Text fontWeight="medium">{item.label}</Text>
                    {item.sublabel && (
                      <Text fontSize="xs" color="slate.500">
                        {item.sublabel}
                      </Text>
                    )}
                  </Box>
                </HStack>
              ))}
            </HStack>
            {about.paragraphs.map((paragraph) => (
              <Text key={paragraph} color="slate.600">
                {paragraph}
              </Text>
            ))}
          </VStack>
        </SimpleGrid>
      </Box>

      <Box as="section" paddingY={{ base: 12, md: 16 }} paddingX={{ base: 4, md: 8 }}>
        <VStack maxWidth="1200px" marginX="auto" align="center" gap={8}>
          <Box textAlign="center">
            <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              {portfolioPreview.eyebrow}
            </Text>
            <Heading as="h2" size="xl" color="brand.700">
              {portfolioPreview.heading}
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} width="100%">
            {categories.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  )
}
