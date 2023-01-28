import { useFormik } from 'formik';
import { BoxImg, Wrapper, Form, Input, H2, Button } from './RequestForm.styled';
import ContactWebP from '../../images/home/contact.webp';
import ContactJpg from '../../images/home/contact.jpg';
import ContactWebP2 from '../../images/home/contact@2x.webp';
import ContactJpg2 from '../../images/home/contact@2x.jpg';

export const RequestForm = ({ contactRef }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper ref={contactRef}>
      <BoxImg>
        <picture>
          <source srcSet={`${ContactWebP} 1x, ${ContactWebP2} 2x`} />
          <img
            srcSet={`${ContactJpg} 1x, ${ContactJpg2} 2x`}
            alt="People"
            src={ContactJpg}
          />
        </picture>
      </BoxImg>
      <Form onSubmit={formik.handleSubmit}>
        <H2>Request Callback</H2>
        <Input
          first
          id="name"
          name="name"
          placeholder="Enter your name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Input
          placeholder="Enter email*"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Button type="submit">Send</Button>
      </Form>
    </Wrapper>
  );
};
