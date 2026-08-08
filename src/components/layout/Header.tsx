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
              css={{
                display: 'inline-block',
                position: 'relative',
                '&.active': { opacity: 1 },
                '&.active::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-6px',
                  height: '6px',
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'6\' viewBox=\'0 0 12 6\'%3E%3Cpath d=\'M0,3 Q3,0 6,3 T12,3\' fill=\'none\' stroke=\'%23ff9a7f\' stroke-width=\'1.5\' stroke-linecap=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'repeat-x',
                  backgroundSize: '12px 6px',
                },
              }}
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
