import { Box, Flex, Grid, Heading, Image, List, Text, VStack } from '@chakra-ui/react'
import type { Project } from '../data/types'
import PlaceholderImage from './decorative/PlaceholderImage'
import Eyebrow from './Eyebrow'

interface ProjectBlockProps {
  project: Project
  reverse?: boolean
  first?: boolean
}

export default function ProjectBlock({ project, reverse = false, first = false }: ProjectBlockProps) {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: reverse ? '1.35fr 0.65fr' : '0.65fr 1.35fr' }}
      gap={{ base: 8, md: 12 }}
      alignItems="center"
      paddingY={{ base: 8, md: 12 }}
    >
      <VStack
        align="start"
        order={{ base: 1, md: reverse ? 2 : 1 }}
        paddingLeft={{ base: 0, md: reverse ? 0 : 8 }}
        marginTop={{ base: 0, md: '-50%' }}
      >
        <Eyebrow>Project</Eyebrow>
        <Heading
          as="h1"
          fontWeight="bold"
          size="3xl"
          color="brand.700"
          marginTop={-3}
        >
          {project.title}
        </Heading>
        {project.subtitle && (
          <Text fontWeight="medium" color="slate.900">
            {project.subtitle}
          </Text>
        )}
        {project.paragraphs.map((paragraph) => (
          <Text key={paragraph} color="slate.900">
            {paragraph}
          </Text>
        ))}
        {project.bulletList && (
          <Box>
            <Text 
              textTransform="uppercase
              "fontWeight="bold" 
              color="slate.900" 
              marginBottom={1}
            >
              Events included:
            </Text>
            <List.Root color="slate.900" paddingLeft={4}>
              {project.bulletList.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List.Root>
          </Box>
        )}
        {project.statCallout && (
          <Text color="slate.900" fontStyle="italic">
            {project.statCallout}
          </Text>
        )}
      </VStack>

      <Box
        position="relative"
        order={{ base: 2, md: reverse ? 1 : 2 }}
        width="92%"
        marginLeft={{ base: 'auto', md: reverse ? 8 : 'auto' }}
        marginRight="auto"
        marginBottom={10}
      >
        {first && (
          <Image
            src="/images/svgs/portfolio-blob.svg"
            alt=""
            aria-hidden="true"
            pointerEvents="none"
            position="absolute"
            right="-12%"
            width="85%"
            zIndex={0}
          />
        )}
        <Box 
          position="relative" 
          zIndex={1}
        >
          <PlaceholderImage
            src={project.image.src}
            alt={project.image.alt}
            aspectRatio={project.image.aspectRatio}
          />
        </Box>
      </Box>

      {project.gallery && (
        <Flex
          wrap="wrap"
          spaceY={-5}
          columnGap={4}
          gridColumn={{ md: '1 / -1' }}
          order={3}
          marginTop={{ base: 4, md: 8 }}
        >
          {project.gallery.length === 3 ? (
            <>
              <PlaceholderImage
                key={project.gallery[1].src}
                src={project.gallery[1].src}
                alt={project.gallery[1].alt}
                aspectRatio={project.gallery[1].aspectRatio}
                justified
                mobileBasis="100%"
                order={{ base: 0, md: 1 }}
              />
              <Box
                display={{ base: 'flex', md: 'contents' }}
                spaceX={-5}
                marginX={{ base: 0 }}
                order={{ base: 1 }}
              >
                <PlaceholderImage
                  key={project.gallery[0].src}
                  src={project.gallery[0].src}
                  alt={project.gallery[0].alt}
                  aspectRatio={project.gallery[0].aspectRatio}
                  justified
                  mobileBasis="52.5%"
                  order={{ base: 0, md: 0 }}
                />
                <PlaceholderImage
                  key={project.gallery[2].src}
                  src={project.gallery[2].src}
                  alt={project.gallery[2].alt}
                  aspectRatio={project.gallery[2].aspectRatio}
                  justified
                  mobileBasis="52.5%"
                  order={{ base: 1, md: 2 }}
                />
              </Box>
            </>
          ) : (
            project.gallery.map((image) => (
              <PlaceholderImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                justified
              />
            ))
          )}
        </Flex>
      )}
    </Grid>
  )
}
