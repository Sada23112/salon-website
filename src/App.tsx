import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import { business } from './config/business';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Reviews />
      <Location />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = `${business.businessName} - Premium Salon Services`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${business.businessName} - Premium salon services including haircuts, styling, coloring, manicures, pedicures, and facial treatments. Book your appointment today.`);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${business.businessName} - Premium Salon Services`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', `Experience luxury salon services at ${business.businessName}. Book your transformation today!`);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', business.heroImage);
    }

    const schemaScript = document.getElementById('local-business-schema');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: business.businessName,
        image: business.logoUrl,
        description: `${business.businessName} - Premium salon services`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address,
          addressLocality: business.city.split(',')[0],
          addressRegion: business.city.split(',')[1]?.trim() || '',
          postalCode: '',
          addressCountry: 'US',
        },
        telephone: business.phone,
        url: window.location.href,
        priceRange: '$$',
        servesCuisine: 'Beauty Services',
      });
    }
  }, []);

  return (
    <div className="bg-background">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
