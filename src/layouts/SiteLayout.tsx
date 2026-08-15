import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

export default function SiteLayout() {
  return (
    <Box>
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
