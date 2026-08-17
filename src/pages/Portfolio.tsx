import { Box, Heading, Link, SimpleGrid, VStack, useToken } from '@chakra-ui/react'
import PageHero from '../components/layout/PageHero'
import CategoryTile from '../components/CategoryTile'
import Eyebrow from '../components/Eyebrow'
import PortfolioBackdrop from '../components/decorative/PortfolioBackdrop'
import { categories, homeContent, siteConfig } from '../data'

export default function Portfolio() {
  const [brand700] = useToken('colors', ['brand.700'])

  return (
    <>
      <PageHero bg="brand.400" headerLineColor={brand700} eyebrow="Work Highlights" title="Portfolio" showBlob minHeight="240px" />

      <Box as="section" position="relative" overflow="hidden" paddingY={{ base: 12, md: 16 }} paddingX={{ base: 4, md: 8 }}>
        <PortfolioBackdrop />
        <VStack position="relative" zIndex={1} maxWidth="1400px" marginX="auto" align="center" gap={8}>
          <Box textAlign="center">
            <Eyebrow letterSpacing="tight">Projects</Eyebrow>
            <Heading as="h1" size="3xl" fontWeight="bold" letterSpacing="tight" color="brand.700">
              Areas of Expertise
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} rowGap={4} columnGap={4} width="100%">
            {categories.map((category) => (
              <CategoryTile
                key={category.slug}
                category={category}
                image={homeContent.portfolioPreview.categoryImages[category.slug]}
              />
            ))}
          </SimpleGrid>
          <Link
            href={siteConfig.contact.portfolioPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            color="brand.700"
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
            alignSelf="start"
          >
            Portfolio PDF &gt;
          </Link>
        </VStack>
      </Box>
    </>
  )
}
