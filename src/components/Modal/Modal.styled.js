import styled from 'styled-components';
import { veriables } from '../../styles/veriables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 186px;
  max-width: 310px;
  width: 100%;
  padding-top: 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (min-width: ${veriables.tablet}) {
    min-height: 500px;
    max-width: 700px;
    padding-top: 0px;
  }
`;
export const Wrapper = styled.div`
  min-height: 186px;
  max-width: 310px;
  margin: 0 5px;
  @media only screen and (min-width: ${veriables.tablet}) {
    min-height: 300px;
    max-width: 700px;
  }
`;
export const Box = styled.div`
  opacity: 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
