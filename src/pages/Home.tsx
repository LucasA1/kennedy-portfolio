import { useState } from 'react'
import { Box, Button, HStack, Heading, IconButton, Image, List, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaPhone, FaXmark } from 'react-icons/fa6'
import PageHero from '../components/layout/PageHero'
import PlaceholderImage from '../components/decorative/PlaceholderImage'
import SkillCard from '../components/SkillCard'
import CategoryTile from '../components/CategoryTile'
import Eyebrow from '../components/Eyebrow'
import PortfolioBackdrop from '../components/decorative/PortfolioBackdrop'
import { categories, homeContent } from '../data'

export default function Home() {
  const { hero, skills, about, portfolioPreview } = homeContent
  const [expandedSkillIndex, setExpandedSkillIndex] = useState<number | null>(null)

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
              {hero.ctas.map((cta, index) => {
                if (index === 1) {
                  return (
                    <Box key={cta.to}>
                      <IconButton
                        asChild
                        aria-label={cta.label}
                        variant="outline"
                        color="white"
                        borderRadius="full"
                        display={{ base: 'inline-flex', md: 'none' }}
                      >
                        <RouterLink to={cta.to}>
                          <FaPhone />
                        </RouterLink>
                      </IconButton>
                      <Button
                        asChild
                        variant="outline"
                        color="white"
                        _hover={{ color: 'slate.900' }}
                        borderRadius="full"
                        paddingX={6}
                        display={{ base: 'none', md: 'inline-flex' }}
                      >
                        <RouterLink to={cta.to}>{cta.label}</RouterLink>
                      </Button>
                    </Box>
                  )
                }
                return (
                  <Button
                    key={cta.to}
                    asChild
                    variant="solid"
                    bg="white"
                    color="brand.700"
                    _hover={{ bg: 'whiteAlpha.900' }}
                    borderRadius="full"
                    paddingX={6}
                  >
                    <RouterLink to={cta.to}>{cta.label}</RouterLink>
                  </Button>
                )
              })}
            </HStack>
          )}
        </VStack>
      </PageHero>

      <Box
        as="section"
        paddingY={16}
      >
        <HStack
          display={{ base: 'none', md: 'flex' }}
          align="center"
          justify="start"
          gap={6}
          maxWidth="1400px"
          marginX="auto"
          paddingX={{ base: 4, md: 8 }}
        >
          <VStack maxW="260px" align="start" flexShrink={0}>
            <Box>
              <Eyebrow fontSize="sm">{skills.eyebrow}</Eyebrow>
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

        <VStack
          display={{ base: 'flex', md: 'none' }}
          align="stretch"
          gap={6}
          maxWidth="1400px"
          marginX="auto"
          paddingX={4}
        >
          <Box>
            <Eyebrow fontSize="sm" textAlign="center">{skills.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              size="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="brand.700"
              paddingBottom={4}
              textAlign="center"
            >
              {skills.heading}
            </Heading>
          </Box>

          <SimpleGrid columns={2} gap={4} alignItems="start">
            <List.Root color="black" paddingLeft={5}>
              {skills.bullets.map((bullet) => (
                <List.Item key={bullet}>{bullet}</List.Item>
              ))}
            </List.Root>

            {expandedSkillIndex === null ? (
              <SimpleGrid columns={2} gap={3}>
                {skills.cards.map((card, index) => (
                  <VStack
                    key={card.title}
                    as="button"
                    onClick={() => setExpandedSkillIndex(index)}
                    bg="white"
                    borderRadius="sm"
                    boxShadow="lg"
                    justify="center"
                    aspectRatio={1}
                    aria-label={card.title}
                  >
                    <Box color="brand.700" fontSize="3xl">
                      <card.icon aria-hidden="true" />
                    </Box>
                  </VStack>
                ))}
              </SimpleGrid>
            ) : (
              <Box position="relative" flex={1}>
                <IconButton
                  aria-label="Close"
                  onClick={() => setExpandedSkillIndex(null)}
                  position="absolute"
                  top={2}
                  right={2}
                  variant="ghost"
                  size="sm"
                  zIndex={1}
                >
                  <FaXmark />
                </IconButton>
                <SkillCard
                  {...skills.cards[expandedSkillIndex]}
                  width="100%"
                  height="auto"
                  minHeight="250px"
                />
              </Box>
            )}
          </SimpleGrid>
        </VStack>
      </Box>

      <Box
        as="section"
        bg="coral.100"
        paddingTop={{ base: 6, md: 12 }}
        paddingBottom={{ base: 12, md: 0 }}
        paddingX={8}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={8}
          maxWidth="1400px"
          marginX="auto"
          alignItems="stretch"
        >
          <Box
            display={{ base: 'none', md: 'block' }}
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

          <VStack align={{ base: 'center', md: 'start' }}>
            <Eyebrow color="slate.900" fontSize="sm" letterSpacing="tight" paddingBottom={0}>
              {about.eyebrow}
            </Eyebrow>
            <Heading as="h2" size="2xl" fontWeight="bold" color="brand.700" letterSpacing="tight" paddingTop={0} textAlign={{ base: 'center', md: 'left' }}>
              {about.heading}
            </Heading>
            <HStack gap={6} flexWrap="wrap" justify={{ base: 'center', md: 'start' }}>
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
              <Text key={paragraph} color="slate.900" textAlign="left" alignSelf="stretch">
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
        paddingTop={10}
        paddingBottom={{ base: 10, md: 16 }}
        paddingX={8}
      >
        <PortfolioBackdrop />
        <VStack
          position="relative"
          zIndex={1}
          maxWidth="1400px"
          marginX="auto"
          align="center"
          gap={8}
        >
          <Box textAlign="center" paddingBottom={8}>
            <Eyebrow letterSpacing="tight">{portfolioPreview.eyebrow}</Eyebrow>
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
