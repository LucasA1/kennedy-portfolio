import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Center, Spinner } from '@chakra-ui/react'
import SiteLayout from './layouts/SiteLayout'

const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PortfolioCategory = lazy(() => import('./pages/PortfolioCategory'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Suspense
      fallback={
        <Center minHeight="100svh">
          <Spinner size="xl" color="brand.500" />
        </Center>
      }
    >
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:categorySlug" element={<PortfolioCategory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
