import styled from 'styled-components';
import { veriables } from '../../styles/veriables';
export const Wrapper = styled.div`
  padding: 70px 20px 50px 20px;
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
    font-size: 20px;
    line-height: 33px;
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
  margin-bottom: 63px;

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    margin-bottom: 36px;
  }
`;
export const Ul = styled.ul`
  display: grid;
  gap: 30px;

  @media only screen and (min-width: ${veriables.tablet}) {
    grid-template-columns: repeat(3, auto);
    gap: 18px;
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    grid-template-columns: repeat(3, auto);
    gap: 21px;
  }
`;
export const Li = styled.li``;
export const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 8px;

  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (min-width: ${veriables.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const BoxImg = styled.div`
  min-width: 280px;
  height: 186px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in-out;
  @media only screen and (min-width: ${veriables.tablet}) {
    height: 148px;
    min-width: 223px;

    :hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
    }
  }
  @media only screen and (min-width: ${veriables.deskTop}) {
    min-width: 420px;
    height: 287px;
    margin-bottom: 14px;
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

export const BoxList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const List = styled.li`
  margin-right: 25px;
  cursor: pointer;
`;
