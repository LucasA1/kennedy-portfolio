import { Box, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import PageHero from '../components/layout/PageHero'
import CategoryTile from '../components/CategoryTile'
import { categories, siteConfig } from '../data'

export default function Portfolio() {
  return (
    <>
      <PageHero bg="brand.400" eyebrow="Work Highlights" title="Portfolio" showBlob minHeight="240px" />

      <Box as="section" paddingY={{ base: 12, md: 16 }} paddingX={{ base: 4, md: 8 }}>
        <VStack maxWidth="1200px" marginX="auto" align="center" gap={8}>
          <Box textAlign="center">
            <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              Projects
            </Text>
            <Heading as="h2" size="2xl" fontWeight="bold" letterSpacing="tight" color="brand.700">
              Areas of Expertise
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} rowGap={4} columnGap={4} width="100%">
            {categories.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </SimpleGrid>
          <Link
            href={siteConfig.contact.portfolioPdfUrl}
            color="brand.500"
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
