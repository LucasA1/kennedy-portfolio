import { Navigate, useParams } from 'react-router-dom'
import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import PageHero from '../components/layout/PageHero'
import ProjectBlock from '../components/ProjectBlock'
import PlaceholderImage from '../components/decorative/PlaceholderImage'
import { categories, miscGalleryItems, projects } from '../data'

export default function PortfolioCategory() {
  const { categorySlug } = useParams()
  const category = categories.find((item) => item.slug === categorySlug)

  if (!category) {
    return <Navigate to="/portfolio" replace />
  }

  const categoryProjects = projects.filter((project) => project.categorySlug === category.slug)
  const isMiscellaneous = category.slug === 'miscellaneous-design'

  return (
    <>
      <PageHero bg="brand.500" eyebrow="Work Highlights" title="Portfolio" showBlob minHeight="240px" />

      <Box as="section" paddingY={{ base: 10, md: 14 }} paddingX={{ base: 4, md: 8 }}>
        <VStack maxWidth="1200px" marginX="auto" align="stretch" gap={2}>
          <Text color="coral.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
            Portfolio / {category.name}
          </Text>

          {isMiscellaneous ? (
            <VStack align="center" gap={8} paddingTop={4}>
              <Box textAlign="center">
                <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
                  Projects
                </Text>
                <Heading as="h2" size="xl" color="brand.700">
                  A little bit of everything
                </Heading>
              </Box>
              <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} width="100%">
                {miscGalleryItems.map((image) => (
                  <PlaceholderImage key={image.src} src={image.src} alt={image.alt} aspectRatio={1} />
                ))}
              </SimpleGrid>
            </VStack>
          ) : (
            <VStack align="stretch" gap={0}>
              {categoryProjects.map((project, index) => (
                <Box
                  key={project.id}
                  borderTopWidth={index > 0 ? '1px' : 0}
                  borderColor="slate.200"
                >
                  <ProjectBlock project={project} reverse={index % 2 === 1} />
                </Box>
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </>
  )
}
