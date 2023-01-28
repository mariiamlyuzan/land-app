import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const Wrapper = styled.div`
  padding: 79px 20px 79px 20px;
  background: ${veriables.accentColor};
  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 62px 32px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 80px 28px 86px 20px;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: ${veriables.whiteColor};
  margin-bottom: 16px;

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
  color: ${veriables.whiteColor};
  margin-bottom: 24px;

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
  color: ${veriables.whiteColor};

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const Button = styled.button`
  height: 54px;
  width: 146px;
  border: 1px solid ${veriables.whiteColor};
  border-radius: 5px;
  background: ${veriables.accentColor};
  padding: 16px 32px 16px 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: ${veriables.whiteColor};
  transition: all 1s ease-in-out;
  cursor: pointer;
  :hover {
    border: 1px solid ${veriables.accentColor};
    border-radius: 5px;
    padding: 16px, 32px;
    color: ${veriables.accentColor};
    background: ${veriables.whiteColor};
  }

  @media only screen and (min-width: ${veriables.tablet}) {
    height: 57px;
    width: 156px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const BoxImg = styled.div`
  height: 220px;
  min-width: 320px;
  overflow: hidden;

  @media only screen and (min-width: ${veriables.tablet}) {
    height: 589px;
    min-width: 368px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    height: 460px;
    min-width: 670px;
  }
`;
export const Box = styled.div`
  @media only screen and (min-width: ${veriables.tablet}) {
    display: flex;
  }
`;
