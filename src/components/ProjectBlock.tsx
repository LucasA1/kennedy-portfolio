import { Box, Heading, List, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import type { Project } from '../data/types'
import PlaceholderImage from './decorative/PlaceholderImage'
import BlobShape from './decorative/BlobShape'

interface ProjectBlockProps {
  project: Project
  reverse?: boolean
}

export default function ProjectBlock({ project, reverse = false }: ProjectBlockProps) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={{ base: 8, md: 12 }}
      alignItems="center"
      paddingY={{ base: 8, md: 12 }}
    >
      <VStack
        align="start"
        gap={4}
        order={{ base: 1, md: reverse ? 2 : 1 }}
      >
        <Text
          color="brand.500"
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Project
        </Text>
        <Heading as="h3" size="xl" color="brand.700">
          {project.title}
        </Heading>
        {project.subtitle && (
          <Text fontWeight="medium" color="slate.500">
            {project.subtitle}
          </Text>
        )}
        {project.paragraphs.map((paragraph) => (
          <Text key={paragraph} color="slate.600">
            {paragraph}
          </Text>
        ))}
        {project.bulletList && (
          <Box>
            <Text fontWeight="semibold" color="slate.700" marginBottom={1}>
              Events included:
            </Text>
            <List.Root color="slate.600" paddingLeft={4}>
              {project.bulletList.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List.Root>
          </Box>
        )}
        {project.statCallout && (
          <Text color="brand.600" fontStyle="italic" fontWeight="medium">
            {project.statCallout}
          </Text>
        )}
      </VStack>

      <Box position="relative" order={{ base: 2, md: reverse ? 1 : 2 }}>
        <BlobShape fill="brand.800" size="115%" top="-8%" left="-8%" />
        <VStack position="relative" zIndex={1} gap={4}>
          {project.images.map((image) => (
            <PlaceholderImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              aspectRatio={image.aspectRatio ?? 4 / 3}
              borderRadius="lg"
            />
          ))}
        </VStack>
      </Box>

      {project.gallery && (
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={4} gridColumn={{ md: '1 / -1' }}>
          {project.gallery.map((image) => (
            <PlaceholderImage key={image.src} src={image.src} alt={image.alt} aspectRatio={image.aspectRatio ?? 1} />
          ))}
        </SimpleGrid>
      )}
    </SimpleGrid>
  )
}
