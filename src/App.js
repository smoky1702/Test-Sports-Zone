import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import UpcomingEvent from './components/UpcomingEvent/UpcomingEvent';
import Countdown from './components/Countdown/Countdown';
import EventGrid from './components/EventGrid/EventGrid';
import EventOrganization from './components/EventOrganization/EventOrganization';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <UpcomingEvent />
      <Countdown />
      <EventGrid />
      <EventOrganization />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;