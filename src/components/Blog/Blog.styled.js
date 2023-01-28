import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const Box = styled.div`
  @media only screen and (min-width: ${veriables.tablet}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Wrapper = styled.div`
  padding: 48px 20px 58px 20px;
  background: ${veriables.blueColor};

  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 59px 32px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 80px 20px 80px 28px;
  }
`;

export const Div = styled.div`
  height: 247px;
  min-width: 320px;
  overflow: hidden;

  @media only screen and (min-width: ${veriables.tablet}) {
    height: 493px;
    min-width: 368px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    height: 460px;
    min-width: 670px;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${veriables.whiteColor};

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
  color: ${veriables.whiteColor};

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 40px;
    line-height: 54px;
  }
`;
export const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
  color: ${veriables.whiteColor};
`;
export const Button = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  width: 172px;
  height: 54px;
  border: 1px solid ${veriables.whiteColor};
  border-radius: 5px;
  padding: 16px, 32px;
  color: ${veriables.whiteColor};
  background: ${veriables.blueColor};
  transition: all 1s ease-in-out;
  cursor: pointer;
  :hover {
    border: 1px solid ${veriables.blueColor};
    border-radius: 5px;
    padding: 16px, 32px;
    color: ${veriables.blueColor};
    background: ${veriables.whiteColor};
  }
`;
