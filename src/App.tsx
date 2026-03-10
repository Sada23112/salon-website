import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import { businessInfo } from './config/businessInfo';

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
      <Features />
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
    document.title = `${businessInfo.name} - Premium Salon Services`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${businessInfo.name} - Premium salon services including haircuts, styling, coloring, manicures, pedicures, and facial treatments. Book your appointment today.`);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${businessInfo.name} - Premium Salon Services`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', `Experience luxury salon services at ${businessInfo.name}. Book your transformation today!`);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', businessInfo.heroImage);
    }

    const schemaScript = document.getElementById('local-business-schema');
    if (schemaScript) {
      const addressParts = businessInfo.contact.address.split(',').map(s => s.trim());
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: businessInfo.name,
        image: businessInfo.logo,
        description: `${businessInfo.name} - Premium salon services`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: addressParts[0] || businessInfo.contact.address,
          addressLocality: addressParts[1] || '',
          addressRegion: '',
          postalCode: '',
          addressCountry: 'US',
        },
        telephone: businessInfo.contact.phone,
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
