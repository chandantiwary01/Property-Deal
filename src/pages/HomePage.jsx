import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LatestProperty from '../components/home/LatestProperty';
import PropertyOverview from '../components/home/PropertyOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HomeServices from '../components/home/HomeServices';
import Offers from '../components/home/Offers';
import ContactForm from '../components/home/ContactForm';
import ConstructionHelps from '../components/home/ConstructionHelps';
import AppDownload from '../components/home/AppDownload';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <LatestProperty />
      <PropertyOverview />
      <WhyChooseUs />
      <HomeServices />
      <Offers />
      <ContactForm />
      <ConstructionHelps />
      <AppDownload />
      <Testimonials />
    </div>
  );
};

export default HomePage;
