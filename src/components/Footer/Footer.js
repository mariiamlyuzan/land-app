import { Footer, Ul, Li, P } from './Footer.styled';
import {
  TiSocialFacebookCircular,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { IconContext } from 'react-icons';

export const FooterLand = () => {
  return (
    <Footer>
      <IconContext.Provider value={{ size: '35px', color: 'white' }}>
        <Ul>
          <Li>
            <TiSocialFacebookCircular
              onMouseOver={({ target }) => (target.style.color = '#28A745')}
              onMouseOut={({ target }) => (target.style.color = 'white')}
            />
          </Li>
          <Li>
            <TiSocialTwitter
              onMouseOver={({ target }) => (target.style.color = '#28A745')}
              onMouseOut={({ target }) => (target.style.color = 'white')}
            />
          </Li>
          <Li>
            <TiSocialYoutube
              onMouseOver={({ target }) => (target.style.color = '#28A745')}
              onMouseOut={({ target }) => (target.style.color = 'white')}
            />
          </Li>
          <Li>
            <TiSocialLinkedin
              onMouseOver={({ target }) => (target.style.color = '#28A745')}
              onMouseOut={({ target }) => (target.style.color = 'white')}
            />
          </Li>
        </Ul>
      </IconContext.Provider>
      <P>Copyright © 2021 - FinanceLedger</P>
    </Footer>
  );
};
