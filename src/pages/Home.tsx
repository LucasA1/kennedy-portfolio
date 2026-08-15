import { Box, Button, Flex, HStack, Heading, List, SimpleGrid, Text, VStack } from '@chakra-ui/react'
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
      <PageHero
        bg="brand.600"
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        minHeight="480px">
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
                  color={index === 0 ? 'brand.700' : 'white'}
                  _hover={index === 0 ? { bg: 'whiteAlpha.900'} : {color: 'slate.700' }}
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
        <HStack align="center" justify="center" gap={6}>
          <VStack maxW="260px" align="start" flexShrink={0}>
            <Box>
              <Text color="brand.300" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
                {skills.eyebrow}
              </Text>
              <Heading
                as="h2"
                size="2xl"
                fontWeight="bold"
                letterSpacing="tight"
                color="brand.700"
                paddingBottom={4}
              >
                {skills.heading}
              </Heading>
              <List.Root color="black" paddingLeft={4}>
                {skills.bullets.map((bullet) => (
                  <List.Item key={bullet}>{bullet}</List.Item>
                ))}
              </List.Root>
            </Box>
          </VStack>
          {skills.cards.map((card) => (
            <SkillCard key={card.title} {...card} />
          ))}
        </HStack>
      </Box>

      <Box as="section" bg="coral.100" paddingTop={{ base: 8, md: 12 }} paddingX={{ base: 4, md: 8 }}>
        <SimpleGrid
          columns={2}
          gap={8}
          maxWidth="1200px"
          marginX="auto"
          alignItems="stretch"
        >
          <Box
            position="relative"
            overflow="hidden"
            width="100%"
            height="100%"
          >
            <Box position="absolute" top={0} left={0} width="200%" height="115%">
              <BlobShape
                fill="coral.400"
                size="100%"
                top="5%"
                left="-30%"
                shape="blob-4"
              />
            </Box>
            <BlobShape
              fill="white"
              size="55%"
              top="8%"
              right="4%"
              shape="blob-5"
              pattern="dots"
            />
            <Box width="60%">
                <PlaceholderImage 
                  src={about.image.src} 
                  alt={about.image.alt} 
                  aspectRatio={3 / 4} 
                  borderRadius="lg" 
                />
            </Box>
          </Box>

          <VStack align="start">
            <Text color="slate.900" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="tight" paddingBottom={0}>
              {about.eyebrow}
            </Text>
            <Heading as="h2" size="2xl" fontWeight="bold" color="brand.600" letterSpacing="tight" paddingTop={0}>
              {about.heading}
            </Heading>
            <HStack gap={6} flexWrap="wrap">
              {about.meta.map((item) => (
                <HStack key={item.label} gap={2} color="coral.400" >
                  <item.icon aria-hidden="true" />
                  <Box>
                    <Text fontWeight="medium" color="slate.700">{item.label}</Text>
                    {item.sublabel && (
                      <Text fontSize="xs" fontStyle="italic" color="slate.700">
                        {item.sublabel}
                      </Text>
                    )}
                  </Box>
                </HStack>
              ))}
            </HStack>
            {about.paragraphs.map((paragraph) => (
              <Text key={paragraph} color="slate.900">
                {paragraph}
              </Text>
            ))}
          </VStack>
        </SimpleGrid>
      </Box>

      <Box 
        as="section" 
        position="relative" 
        overflow="hidden" 
        backgroundColor="slate.50"
        paddingY={{ base: 12, md: 16 }} 
        paddingX={{ base: 4, md: 8 }}
      >
        <Box
          position="absolute"
          inset={0}
          backgroundImage="url(/images/home/home-portfolio.svg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="75%"
          zIndex={0}
        />
        <VStack position="relative" zIndex={1} maxWidth="1200px" marginX="auto" align="center" gap={8}>
          <Box textAlign="center">
            <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              {portfolioPreview.eyebrow}
            </Text>
            <Heading as="h2" size="2xl" fontWeight="bold" color="brand.700" letterSpacing="tight">
              {portfolioPreview.heading}
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={3} width="100%">
            {categories.map((category) => (
              <CategoryTile
                key={category.slug}
                category={category}
                image={portfolioPreview.categoryImages[category.slug]}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  )
}
