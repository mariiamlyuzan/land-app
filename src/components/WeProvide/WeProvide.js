import { Wrapper, P, H2, Button, BoxImg, Box } from './WeProvide.styled';
import PeopleWebP from '../../images/home/people.webp';
import PeopleJpg from '../../images/home/people.jpg';
import PeopleWebP2 from '../../images/home/people@2x.webp';
import PeopleJpg2 from '../../images/home/people@2x.jpg';
export const WeProvide = ({ aboutRef }) => {
  return (
    <Box ref={aboutRef}>
      <BoxImg>
        <picture>
          <source srcSet={`${PeopleWebP} 1x, ${PeopleWebP2} 2x`} />
          <img
            srcSet={`${PeopleJpg} 1x, ${PeopleJpg2} 2x`}
            alt="People"
            src={PeopleJpg}
          />
        </picture>
      </BoxImg>
      <Wrapper>
        <P>What you are looking for</P>
        <H2>We provide bespoke solutions</H2>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </P>
        <Button>Read More</Button>
      </Wrapper>
    </Box>
  );
};
