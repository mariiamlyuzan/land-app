import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const Footer = styled.footer`
  background: ${veriables.footerColor};
  padding: 20px 0px;
  text-align: center;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Li = styled.li`
  margin-right: 25px;
  cursor: pointer;
`;
export const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  color: ${veriables.whiteColor};
`;
