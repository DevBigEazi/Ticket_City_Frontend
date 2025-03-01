import React from 'react';
import Layout from './components /Layout';
import Hero from './components /Hero';
import EventsSection from './components /Events/EventsSection';
import Footer from './components /Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <EventsSection />
        <Footer />
      </div>
    </Layout>
  );
};

export default App;
