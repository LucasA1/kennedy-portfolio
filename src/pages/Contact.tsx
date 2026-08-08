import { Box, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import PageHero from '../components/layout/PageHero'
import ContactList from '../components/ContactList'
import ResumeCard from '../components/ResumeCard'
import { siteConfig } from '../data'

export default function Contact() {
  return (
    <>
      <PageHero bg="coral.500" eyebrow="Additional Information" title="Contact" showBlob minHeight="240px" />

      <Box as="section" paddingY={{ base: 10, md: 14 }} paddingX={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 16 }} maxWidth="1200px" marginX="auto">
          <VStack align="start" gap={6}>
            <Box>
              <Text color="brand.500" fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
                Details
              </Text>
              <Heading as="h2" size="xl" color="brand.700">
                Let's Chat
              </Heading>
            </Box>
            <Text color="slate.600">
              Thank you for taking the time to browse my work. If you would like to get further in touch, you can
              contact me in these various ways. If you're looking to sell me a car warranty, please disregard this
              information.
            </Text>
            <ContactList />

            <Box>
              <Text
                color="brand.500"
                fontWeight="bold"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
                marginBottom={2}
              >
                Download
              </Text>
              <VStack align="start" gap={1}>
                <Link href={siteConfig.contact.resumeUrl} color="brand.600" fontWeight="medium">
                  Resumé
                </Link>
                <Link href={siteConfig.contact.portfolioPdfUrl} color="brand.600" fontWeight="medium">
                  Portfolio PDF
                </Link>
              </VStack>
            </Box>
          </VStack>

          <ResumeCard />
        </SimpleGrid>
      </Box>
    </>
  )
}
