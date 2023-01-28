import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const AppBar = styled.header`
  padding: 22px 22px 0px 22px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 23px 32px 0px 32px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 32px 28px 0px 28px;
  }
`;
export const DivLogo = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  transition: all 1s ease-in-out;
  cursor: pointer;
  :hover {
    font-size: 38px;
  }

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 35px;
    line-height: 48px;
  }
`;
export const SpanGreen = styled.span`
  color: ${veriables.accentColor};
  margin-right: 8px;
  transition: all 1s ease-in-out;
  :hover {
    color: ${veriables.accentOpacity};
  }
`;
export const SpanWhite = styled.span`
  color: ${veriables.whiteColor};
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: ${veriables.whiteColor};
  @media only screen and (min-width: ${veriables.tablet}) {
    min-width: 50%;
    font-size: 18px;
    line-height: 25px;
  }
`;
export const Li = styled.li`
  cursor: pointer;
  :hover {
    border-bottom: 2px solid;
    border-color: ${veriables.accentColor};
  }
`;
