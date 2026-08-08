import { Box, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { resume } from '../data'

function SectionLabel({ children }: { children: string }) {
  return (
    <Text
      fontWeight="bold"
      fontSize="xs"
      letterSpacing="wide"
      textTransform="uppercase"
      color="brand.600"
      borderTopWidth="1px"
      borderColor="slate.200"
      paddingTop={3}
    >
      {children}
    </Text>
  )
}

export default function ResumeCard() {
  return (
    <Box bg="white" borderRadius="lg" boxShadow="lg" padding={{ base: 6, md: 8 }}>
      <VStack align="start" gap={4}>
        <Box>
          <Heading as="h2" size="lg" color="brand.700">
            {resume.name}
          </Heading>
          <Text color="slate.600">{resume.title}</Text>
        </Box>

        <VStack align="start" gap={1} width="100%">
          <SectionLabel>Contact</SectionLabel>
          <Text fontSize="sm" color="slate.600">
            {resume.contact.phone} | {resume.contact.email} | {resume.contact.website}
          </Text>
        </VStack>

        <VStack align="start" gap={1} width="100%">
          <SectionLabel>Education</SectionLabel>
          {resume.education.map((item) => (
            <HStack key={item.institution} justify="space-between" width="100%" align="start">
              <Box>
                <Text fontWeight="semibold" fontSize="sm">
                  {item.institution}
                </Text>
                {item.honors && (
                  <Text fontSize="xs" fontStyle="italic" color="slate.500">
                    {item.honors}
                  </Text>
                )}
              </Box>
              <Text fontSize="sm" color="slate.500" whiteSpace="nowrap">
                {item.years}
              </Text>
            </HStack>
          ))}
        </VStack>

        <VStack align="start" gap={4} width="100%">
          <SectionLabel>Work Experience</SectionLabel>
          {resume.workHistory.map((job) => (
            <Box key={job.company} width="100%">
              <HStack justify="space-between" width="100%" align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  {job.company}
                </Text>
                <Text fontSize="sm" color="slate.500" whiteSpace="nowrap">
                  {job.dates}
                </Text>
              </HStack>
              <Text fontSize="sm" fontStyle="italic" color="slate.500" marginBottom={1}>
                {job.role}
              </Text>
              <VStack align="start" gap={0.5} paddingLeft={4}>
                {job.highlights.map((highlight) => (
                  <Text key={highlight} fontSize="sm" color="slate.600">
                    • {highlight}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>

        <VStack align="start" gap={2} width="100%">
          <SectionLabel>Skills</SectionLabel>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="100%">
            <VStack align="start" gap={0.5}>
              {resume.skillsColumnA.map((skill) => (
                <Text key={skill} fontSize="sm" color="slate.600">
                  • {skill}
                </Text>
              ))}
            </VStack>
            <VStack align="start" gap={0.5}>
              {resume.skillsColumnB.map((skill) => (
                <Text key={skill} fontSize="sm" color="slate.600">
                  • {skill}
                </Text>
              ))}
            </VStack>
          </SimpleGrid>
        </VStack>

        <VStack align="start" gap={2} width="100%">
          <SectionLabel>Technical</SectionLabel>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="100%">
            <VStack align="start" gap={0.5}>
              {resume.technicalColumnA.map((item) => (
                <Text key={item} fontSize="sm" color="slate.600">
                  • {item}
                </Text>
              ))}
            </VStack>
            <VStack align="start" gap={0.5}>
              {resume.technicalColumnB.map((item) => (
                <Text key={item} fontSize="sm" color="slate.600">
                  • {item}
                </Text>
              ))}
            </VStack>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  )
}
