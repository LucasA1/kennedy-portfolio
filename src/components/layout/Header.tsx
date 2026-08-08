import { Box, Flex, HStack} from '@chakra-ui/react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { siteConfig } from '../../data'

export default function Header() {
  return (
    <Box as="header" position="relative" zIndex={2} paddingY={4} paddingX={{ base: 4, md: 8 }}>
      <Flex align="center" justify="center" maxWidth="1200px" marginX="auto">
        <HStack gap={{ base: 4, md: 8 }} as="nav">
          {siteConfig.navLinks.map((link) => (
            <Box
              key={link.to}
              asChild
              color="white"
              fontWeight="medium"
              fontSize="sm"
              letterSpacing="wide"
              textTransform="uppercase"
              opacity={0.85}
              _hover={{ opacity: 1 }}
              css={{ '&.active': { opacity: 1, textDecoration: 'underline' } }}
            >
              <RouterNavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </RouterNavLink>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
