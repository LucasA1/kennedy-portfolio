import { Box, Grid, Text, VStack, useToken } from '@chakra-ui/react'
import { siteConfig } from '../../data'
import ContactList from '../ContactList'

export default function Footer() {
  const [fill] = useToken('colors', ['coral.400'])

  return (
    <Box as="footer" position="relative">
      <Box width="100%" aspectRatio={1366.62 / 186.14} lineHeight={0}>
        <svg
          viewBox="0 0 1366.62 186.14"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          style={{ display: 'block' }}
          aria-hidden="true"
        >
          <path
            fill={fill}
            d="M1313.56,1.03c-21.09,4.1-46.47,30.27-66.85,37.06-29.81,9.92-49.31,9.18-80.64,6.6-42.27-3.49-72.97,23.95-115.24,20.46-40.42-3.33-90.36-43.83-138.99-50.51-28.92-3.97-57.98,6.76-86.8,11.38-42.3,6.77-84.7,12.92-127.09,19.06-36.01,5.22-72.97,10.42-108.52,2.67-47.13-10.28-90.59-42.94-138.49-37.1-33.07,4.03-62.39,26.28-95.69,27.14-31.8.81-60.64-17.97-91.91-23.8-44.3-8.26-88.61,9.89-131.94,22.24S34.46,51.5,0,22.55v128.04h.62v35.55h1366V25.72c-5.69-20.66-31.97-28.79-53.06-24.69Z"
          />
        </svg>
      </Box>
      <Box
        position="absolute"
        inset={0}
        display="flex"
        alignItems="flex-end"
        paddingBottom={16}
        paddingX={{ base: 4, md: 8 }}
      >
        <Grid
          width="100%"
          maxWidth="1400px"
          marginX="auto"
          templateColumns={{ base: '1fr', md: 'repeat(2, max-content)' }}
          alignItems={{ base: 'start', md: 'center' }}
          gap={8}
        >
          <VStack align="start">
            <Text fontWeight="bold" fontSize="2xl" color="brand.700">
              {siteConfig.siteName}
            </Text>
            <Text fontWeight="bold" color="slate.900">
              {siteConfig.tagline}
            </Text>
          </VStack>
          <ContactList color="brand.700" includePhone={false} />
        </Grid>
      </Box>
    </Box>
  )
}
