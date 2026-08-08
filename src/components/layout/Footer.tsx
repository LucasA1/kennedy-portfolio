import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { siteConfig } from '../../data'
import ContactList from '../ContactList'

export default function Footer() {
  return (
    <Box as="footer" bg="coral.400" paddingY={10} paddingX={{ base: 4, md: 8 }}>
      <Flex
        maxWidth="1200px"
        marginX="auto"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'start', md: 'center' }}
        justify="space-between"
        gap={6}
      >
        <VStack align="start" gap={0}>
          <Text fontWeight="bold" fontSize="lg" color="brand.700">
            {siteConfig.siteName}
          </Text>
          <Text fontWeight="medium" color="brand.700">
            {siteConfig.tagline}
          </Text>
        </VStack>
        <ContactList color="brand.700" includePhone={false} />
      </Flex>
    </Box>
  )
}
