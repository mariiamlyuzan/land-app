import React, { useRef } from 'react';

import { Header } from '../AppBar/AppBar';
import { Hero } from '../Hero/Hero';
import { WeProvide } from '../WeProvide/WeProvide';
import { BusinessCases } from '../BusinessCases/BusinessCases';
import { Blog } from '../Blog/Blog';
import { OurProfessionalTeam } from '../OurProfessionalTeam/OurProfessionalTeam';
import { RequestForm } from '../RequestForm/RequestForm';
import { FooterLand } from '../Footer/Footer';
import { Box } from './App.styled';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const casesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <Box>
        <Header
          contactRef={contactRef}
          homeRef={homeRef}
          casesRef={casesRef}
          blogRef={blogRef}
          aboutRef={aboutRef}
        />
        <Hero homeRef={homeRef} />
      </Box>
      <WeProvide aboutRef={aboutRef} />
      <BusinessCases casesRef={casesRef} />
      <Blog blogRef={blogRef} />
      <OurProfessionalTeam />
      <RequestForm contactRef={contactRef} />
      <FooterLand />
    </div>
  );
}

export default App;
