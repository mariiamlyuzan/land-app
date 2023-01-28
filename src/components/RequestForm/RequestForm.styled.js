import styled from 'styled-components';
import { veriables } from '../../styles/veriables';
export const BoxImg = styled.div`
  min-width: 320px;
  height: 220px;
  overflow: hidden;

  @media only screen and (min-width: ${veriables.tablet}) {
    height: 354px;
    min-width: 368px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    min-width: 670px;
    height: 454px;
  }
`;
export const Wrapper = styled.div`
  @media only screen and (min-width: ${veriables.tablet}) {
    display: flex;
    padding-bottom: 40px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding-bottom: 0px;
  }
`;
export const Form = styled.form`
  padding: 51px 20px 25px 20px;
  background: ${veriables.formColor};
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 32px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 56px 28px 77px 20px;
  }
`;

export const Input = styled.input`
  padding: 16px 8px;
  width: 100%;
  background: ${veriables.whiteColor};
  border: 1px solid ${veriables.borderInputColor};
  border-radius: 5px;
  margin-bottom: ${props => (props.first ? `16px` : `24px`)};
  cursor: pointer;
  &::placeholder {
    color: ${veriables.placeholderColor};
  }
`;
export const Button = styled.button`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  padding: 16px 56px;
  width: 155px;
  height: 57px;
  color: ${veriables.whiteColor};
  background: ${veriables.accentColor};
  border-radius: 5px;
  border: none;
  transition: all 1s ease-in-out;
  cursor: pointer;
  :hover {
    background: ${veriables.accentOpacity};
  }
`;
export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  margin-bottom: 69px;

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 40px;
    line-height: 54px;
    margin-bottom: 24px;
    text-align: center;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    margin-bottom: 29px;
    text-align: left;
  }
`;
