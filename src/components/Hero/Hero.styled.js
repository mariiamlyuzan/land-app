import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const Wrapper = styled.div`
  padding: 62px 20px 104px 20px;
  text-align: center;

  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 314px 123px 378px 122px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 192px 281px 270px 280px;
  }
`;
export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;
  margin_bottom: 16px;
  color: ${veriables.whiteColor};

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 55px;
    font-weight: 600;
    line-height: 75px;
  }
`;

export const P = styled.p`
  font-size: 26px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 24px;
  color: ${veriables.whiteColor};
  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Button = styled.button`
  padding: 16px 32px;
  width: 175px;
  height: 57px;
  background: ${veriables.accentColor};
  color: ${veriables.whiteColor};
  border: none;
  border-radius: 5px;
  transition: all 1s ease-in-out;
  cursor: pointer;
  :hover {
    background: ${veriables.accentOpacity};
  }
`;
