import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './components/MainLayout';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Configure router with future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <HelmetProvider>
      <Router {...router}>
        <CustomCursor />
        <ScrollProgress />
        <MainLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
