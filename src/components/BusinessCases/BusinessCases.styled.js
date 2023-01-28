import styled from 'styled-components';
import { veriables } from '../../styles/veriables';
export const Wrapper = styled.section`
  padding: 56px 20px 40px 20px;
  text-align: center;

  @media only screen and (min-width: ${veriables.tablet}) {
    padding: 50px 32px 40px 32px;
  }

  @media only screen and (min-width: ${veriables.deskTop}) {
    padding: 80px 28px 88px 28px;
  }
`;
export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin-bottom: 16px;
  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const Overlay = styled.div`
  display: inline-block;
  position: absolute;
  padding: 63px 24px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  -webkit-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0em;
  margin-bottom: 24px;
  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 31px;

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const Ul = styled.ul`
  display: grid;
  gap: 8px;

  @media only screen and (min-width: ${veriables.tablet}) {
    grid-template-columns: repeat(3, auto);
    gap: 18px;
  }
`;
export const Li = styled.li`
  height: 176px;
  min-width: 280px;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: ${veriables.tablet}) {
    height: 148px;
    min-width: 223px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    height: 282px;
    min-width: 421px;
  }
`;
