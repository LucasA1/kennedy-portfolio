import { Box, CloseButton, Drawer, Flex, HStack, IconButton, Portal, VStack } from '@chakra-ui/react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { siteConfig } from '../../data'

export default function Header({ lineColor = '#ff9a7f' }: { lineColor?: string }) {
  const encodedLineColor = lineColor.replace('#', '%23')

  const activeLinkStyles = {
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
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M0,3 Q3,0 6,3 T12,3' fill='none' stroke='${encodedLineColor}' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: '12px 6px',
    },
  } as const

  return (
    <Box as="header" position="relative" zIndex={2} paddingY={4} paddingX={{ base: 4, md: 8 }}>
      <Flex align="center" justify="center" maxWidth="1400px" marginX="auto">
        <HStack
          paddingTop={6}
          gap={{ base: 4, md: 8 }}
          as="nav"
          display={{ base: 'none', md: 'flex' }}
        >
          {siteConfig.navLinks.map((link) => (
            <Box
              key={link.to}
              asChild
              color="white"
              fontWeight="medium"
              fontSize="lg"
              letterSpacing="wide"
              textTransform="uppercase"
              opacity={0.85}
              _hover={{ opacity: 1 }}
              css={activeLinkStyles}
            >
              <RouterNavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </RouterNavLink>
            </Box>
          ))}
        </HStack>

        <Box
          position="absolute"
          top={4}
          right={{ base: 4, md: 8 }}
          display={{ base: 'block', md: 'none' }}
        >
          <Drawer.Root placement="end">
            <Drawer.Trigger asChild>
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                color="white"
                fontSize="xl"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                <FaBars />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content bg="brand.700">
                  <Box paddingX={6} paddingY={4} display="flex" justifyContent="flex-end">
                    <Drawer.CloseTrigger asChild>
                      <CloseButton color="white" _hover={{ bg: 'whiteAlpha.200' }} />
                    </Drawer.CloseTrigger>
                  </Box>
                  <Drawer.Body>
                    <VStack align="start" gap={6} as="nav">
                      {siteConfig.navLinks.map((link) => (
                        <Drawer.CloseTrigger key={link.to} asChild>
                          <Box
                            asChild
                            color="white"
                            fontWeight="medium"
                            fontSize="xl"
                            letterSpacing="wide"
                            textTransform="uppercase"
                            opacity={0.85}
                            _hover={{ opacity: 1 }}
                            css={activeLinkStyles}
                          >
                            <RouterNavLink to={link.to} end={link.to === '/'}>
                              {link.label}
                            </RouterNavLink>
                          </Box>
                        </Drawer.CloseTrigger>
                      ))}
                    </VStack>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>
      </Flex>
    </Box>
  )
}
