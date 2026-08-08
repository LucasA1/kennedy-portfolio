import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import WavyDivider from '../components/decorative/WavyDivider'

export default function SiteLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100svh">
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <WavyDivider fill="coral.400" />
      <Footer />
    </Box>
  )
}
