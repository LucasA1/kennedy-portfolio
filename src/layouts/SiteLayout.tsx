import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

export default function SiteLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100dvh">
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
