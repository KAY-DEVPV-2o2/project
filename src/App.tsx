import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;