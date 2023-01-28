import {
  Wrapper,
  Span,
  H2,
  P,
  Ul,
  Li,
  Title,
  Name,
  BoxImg,
  Overlay,
  List,
  BoxList,
} from './OurProfessionalTeam.styled';
import {
  TiSocialFacebookCircular,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { IconContext } from 'react-icons';

import Person1WebP from '../../images/team/person1.webp';
import Person1Jpg from '../../images/team/person1.jpg';
import Person1WebP2 from '../../images/team/person1@2x.webp';
import Person1Jpg2 from '../../images/team/person1@2x.jpg';

import Person2WebP from '../../images/team/person2.webp';
import Person2Jpg from '../../images/team/person2.jpg';
import Person2WebP2 from '../../images/team/person2@2x.webp';
import Person2Jpg2 from '../../images/team/person2@2x.jpg';

import Person3WebP from '../../images/team/person3.webp';
import Person3Jpg from '../../images/team/person3.jpg';
import Person3WebP2 from '../../images/team/person3@2x.webp';
import Person3Jpg2 from '../../images/team/person3@2x.jpg';

export const OurProfessionalTeam = () => {
  return (
    <Wrapper>
      <Span>Who we are</Span>
      <H2>Our Professional Team</H2>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </P>

      <Ul>
        <Li>
          <BoxImg>
            <picture>
              <source srcSet={`${Person1WebP} 1x, ${Person1WebP2} 2x`} />
              <img
                srcSet={`${Person1Jpg} 1x, ${Person1Jpg2} 2x`}
                alt="People"
                src={Person1Jpg}
              />
            </picture>
            <Overlay>
              {' '}
              <IconContext.Provider value={{ size: '35px', color: 'white' }}>
                <BoxList>
                  <List>
                    <TiSocialFacebookCircular
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialTwitter
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialYoutube
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialLinkedin
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                </BoxList>
              </IconContext.Provider>
            </Overlay>
          </BoxImg>

          <Title>John Doe</Title>
          <Name>President</Name>
        </Li>
        <Li>
          <BoxImg>
            <picture>
              <source srcSet={`${Person2WebP} 1x, ${Person2WebP2} 2x`} />
              <img
                srcSet={`${Person2Jpg} 1x, ${Person2Jpg2} 2x`}
                alt="People"
                src={Person2Jpg}
              />
            </picture>
            <Overlay>
              {' '}
              <IconContext.Provider value={{ size: '35px', color: 'white' }}>
                <BoxList>
                  <List>
                    <TiSocialFacebookCircular
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialTwitter
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialYoutube
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialLinkedin
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                </BoxList>
              </IconContext.Provider>
            </Overlay>
          </BoxImg>
          <Title>Jane Doe</Title>
          <Name>Vice President</Name>
        </Li>
        <Li>
          <BoxImg>
            <picture>
              <source srcSet={`${Person3WebP} 1x, ${Person3WebP2} 2x`} />
              <img
                srcSet={`${Person3Jpg} 1x, ${Person3Jpg2} 2x`}
                alt="People"
                src={Person3Jpg}
              />
            </picture>
            <Overlay>
              {' '}
              <IconContext.Provider value={{ size: '35px', color: 'white' }}>
                <BoxList>
                  <List>
                    <TiSocialFacebookCircular
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialTwitter
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialYoutube
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                  <List>
                    <TiSocialLinkedin
                      onMouseOver={({ target }) =>
                        (target.style.color = 'rgba(225,225,225, 0.8)')
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = 'white')
                      }
                    />
                  </List>
                </BoxList>
              </IconContext.Provider>
            </Overlay>
          </BoxImg>
          <Title>Steve Smith</Title>
          <Name>Marketing Head</Name>
        </Li>
      </Ul>
    </Wrapper>
  );
};
