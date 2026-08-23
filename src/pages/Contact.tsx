import { Box, Flex, Grid, Heading, Link, Text, VStack, useToken } from '@chakra-ui/react'
import PageHero from '../components/layout/PageHero'
import ContactList from '../components/ContactList'
import ResumePdfPreview from '../components/ResumePdfPreview'
import Eyebrow from '../components/Eyebrow'
import { siteConfig } from '../data'

export default function Contact() {
  const [brand700] = useToken('colors', ['brand.700'])
  return (
    <>
      <PageHero
        bg="coral.400"
        headerLineColor={brand700}
        eyebrow="Additional Information"
        title="Contact"
        minHeight="240px"
        showBlob
        bottomRightBlobSrc="/images/svgs/contact-header-bottom-right.svg"
      />

      <Box as="section" paddingY={{ base: 10, md: 14 }} paddingX={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: '1fr', md: '0.6fr 1.4fr' }}
          gap={20}
          maxWidth="1400px"
          marginX="auto"
        >
          <VStack align="start" gap={6}>
            <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
              <Eyebrow>Details</Eyebrow>
              <Heading as="h2" size="3xl" color="brand.700" fontWeight="bold">
                Let's Chat
              </Heading>
            </Box>
            <Text color="slate.900" letterSpacing="tight" fontWeight="medium" lineHeight="tall">
              Thank you for taking the time to browse my work. If you would like to get further in touch, you can
              contact me in these various ways. If you're looking to sell me a car warranty, please disregard this
              information.
            </Text>
            <Flex
              direction={{ base: 'row', md: 'column' }}
              align="start"
              wrap="wrap"
              gap={{ base: 8, md: 6 }}
              width="100%"
            >
              <ContactList color="brand.700" />

              <Box>
                <Eyebrow color="coral.400" fontSize="md" marginBottom={2}>
                  Download
                </Eyebrow>
                <VStack align="start" gap={1}>
                  <Link
                    href={siteConfig.contact.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="slate.900"
                    fontWeight="medium"
                    textDecoration="underline"
                  >
                    Resumé
                  </Link>
                  <Link
                    href={siteConfig.contact.portfolioPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="slate.900"
                    fontWeight="medium"
                    textDecoration="underline"
                  >
                    Portfolio PDF
                  </Link>
                </VStack>
              </Box>
            </Flex>
          </VStack>

          <ResumePdfPreview fileUrl={siteConfig.contact.resumeUrl} />
        </Grid>
      </Box>
    </>
  )
}
