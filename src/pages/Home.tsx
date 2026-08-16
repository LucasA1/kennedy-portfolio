import { Box, Button, HStack, Heading, Image, List, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import PlaceholderImage from '../components/decorative/PlaceholderImage'
import SkillCard from '../components/SkillCard'
import CategoryTile from '../components/CategoryTile'
import { categories, homeContent } from '../data'

export default function Home() {
  const { hero, skills, about, portfolioPreview } = homeContent

  return (
    <>
      <PageHero
        bg="brand.700"
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        minHeight="480px"
      >
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
                  _hover={index === 0 ? { bg: 'whiteAlpha.900'} : {color: 'slate.900' }}
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

      <Box
        as="section"
        paddingY={16}
      >
        <HStack
          align="center"
          justify="start"
          gap={6}
          maxWidth="1400px"
          marginX="auto"
          paddingX={{ base: 4, md: 8 }}
        >
          <VStack maxW="260px" align="start" flexShrink={0}>
            <Box>
              <Text color="brand.400" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
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
              <List.Root color="black" paddingLeft={5}>
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

      <Box 
        as="section" 
        bg="coral.100" 
        paddingTop={12} 
        paddingX={8}
      >
        <SimpleGrid
          columns={2}
          gap={8}
          maxWidth="1400px"
          marginX="auto"
          alignItems="stretch"
        >
          <Box
            position="relative"
            overflow="hidden"
            width="100%"
            height="100%"
          >
            <Image
              src="/images/home/about.svg"
              alt=""
              aria-hidden="true"
              pointerEvents="none"
              position="absolute"
              bottom={0}
              left={0}
              width="100%"
              zIndex={0}
            />
            <Box width="60%" height="20%" position="relative" zIndex={1} left={20}>
              <PlaceholderImage 
                src={about.image.src} 
                alt={about.image.alt}
                aspectRatio={.74} 
                borderRadius="lg" 
              />
            </Box>
          </Box>

          <VStack align="start">
            <Text color="slate.900" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="tight" paddingBottom={0}>
              {about.eyebrow}
            </Text>
            <Heading as="h2" size="2xl" fontWeight="bold" color="700" letterSpacing="tight" paddingTop={0}>
              {about.heading}
            </Heading>
            <HStack gap={6} flexWrap="wrap">
              {about.meta.map((item) => (
                <HStack key={item.label} gap={2} color="coral.400" >
                  <item.icon aria-hidden="true" />
                  <Box>
                    <Text fontWeight="medium" color="slate.900">{item.label}</Text>
                    {item.sublabel && (
                      <Text fontSize="xs" fontStyle="italic" color="slate.900">
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
        paddingY={16} 
        paddingX={8}
        paddingTop={10}
      >
        <Box
          position="absolute"
          inset={0}
          backgroundImage="url(/images/home/home-portfolio.svg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="85%"
          zIndex={0}
        />
        <VStack 
          position="relative"
          zIndex={1}
          maxWidth="1400px"
          marginX="auto" 
          align="center" 
          gap={8}
          paddingBottom={12}
        >
          <Box textAlign="center" paddingBottom={8}>
            <Text color="brand.400" fontWeight="bold" fontSize="lg" textTransform="uppercase" letterSpacing="tight">
              {portfolioPreview.eyebrow}
            </Text>
            <Heading as="h2" size="4xl" fontWeight="bold" color="brand.700" letterSpacing="tight">
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
