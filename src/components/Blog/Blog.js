import { Box, Wrapper, Div, Span, H2, P, Button } from './Blog.styled';
import BlogJpg from '../../images/home/blog.jpg';
import BlogJpg2 from '../../images/home/blog@2x.jpg';
import BlogWebP from '../../images/home/blog.webp';
import BlogWebP2 from '../../images/home/blog@2x.webp';

export const Blog = ({ blogRef }) => {
  return (
    <Box ref={blogRef}>
      <Div>
        <picture>
          <source srcSet={`${BlogWebP} 1x, ${BlogWebP2} 2x type="image/webp`} />
          <img
            srcSet={`${BlogJpg} 1x, ${BlogJpg2} 2x`}
            alt="People"
            src={BlogJpg}
          />
        </picture>
      </Div>
      <Wrapper>
        <Span>April 16 2020</Span>
        <H2>Blog Post One</H2>

        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </P>
        <Button>Read Our Blog</Button>
      </Wrapper>
    </Box>
  );
};
