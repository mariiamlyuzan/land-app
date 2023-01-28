import React, { useEffect } from 'react';
import { AppBar, DivLogo, SpanGreen, SpanWhite, Ul, Li } from './AppBar.styled';

import { FaBookOpen } from 'react-icons/fa';
import { IconContext } from 'react-icons';

let iconStyles = { marginRight: '9px', position: 'relative', top: '8px' };

export const Header = ({
  homeRef,
  aboutRef,
  casesRef,
  blogRef,
  contactRef,
}) => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = e => {
    const header = document.getElementById('header');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  const handleScroll = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar id="header">
      <DivLogo>
        <IconContext.Provider value={{ size: '40px', color: '#28A745' }}>
          <FaBookOpen style={iconStyles} />
        </IconContext.Provider>
        <SpanGreen>Finance</SpanGreen>
        <SpanWhite>Ledger</SpanWhite>
      </DivLogo>
      <Ul>
        <Li
          onClick={() => {
            handleScroll(homeRef);
          }}
        >
          Home
        </Li>

        <Li
          onClick={() => {
            handleScroll(aboutRef);
          }}
        >
          About
        </Li>

        <Li
          onClick={() => {
            handleScroll(casesRef);
          }}
        >
          Cases
        </Li>
        <Li
          onClick={() => {
            handleScroll(blogRef);
          }}
        >
          Blog
        </Li>
        <Li
          onClick={() => {
            handleScroll(contactRef);
          }}
        >
          Contact
        </Li>
      </Ul>
    </AppBar>
  );
};
