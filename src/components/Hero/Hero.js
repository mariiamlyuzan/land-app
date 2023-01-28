import { Wrapper, H1, P, Button } from './Hero.styled';

export const Hero = ({ homeRef }) => {
  return (
    <Wrapper ref={homeRef}>
      <H1>The Sky Is The Limit</H1>
      <P>We provide world class financial assistance</P>
      <Button>Read More</Button>
    </Wrapper>
  );
};
