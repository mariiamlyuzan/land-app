import { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { Wrapper, Span, H2, P, Ul, Li, Overlay } from './BusinessCases.styled';

import Cases1Jpg from '../../images/cases/cases1.jpg';
import Cases1Jpg2 from '../../images/cases/cases1@2x.jpg';
import Cases1WebP from '../../images/cases/cases1.webp';
import Cases1WebP2 from '../../images/cases/cases1@2x.webp';

import Cases2Jpg from '../../images/cases/cases2.jpg';
import Cases2Jpg2 from '../../images/cases/cases2@2x.jpg';
import Cases2WebP from '../../images/cases/cases2.webp';
import Cases2WebP2 from '../../images/cases/cases2@2x.webp';

import Cases3Jpg from '../../images/cases/cases3.jpg';
import Cases3Jpg2 from '../../images/cases/cases3@2x.jpg';
import Cases3WebP from '../../images/cases/cases3.webp';
import Cases3WebP2 from '../../images/cases/cases3@2x.webp';

import Cases4Jpg from '../../images/cases/cases4.jpg';
import Cases4Jpg2 from '../../images/cases/cases4@2x.jpg';
import Cases4WebP from '../../images/cases/cases4.webp';
import Cases4WebP2 from '../../images/cases/cases4@2x.webp';

import Cases5Jpg from '../../images/cases/cases5.jpg';
import Cases5Jpg2 from '../../images/cases/cases5@2x.jpg';
import Cases5WebP from '../../images/cases/cases5.webp';
import Cases5WebP2 from '../../images/cases/cases5@2x.webp';

import Cases6Jpg from '../../images/cases/cases6.jpg';
import Cases6Jpg2 from '../../images/cases/cases6@2x.jpg';
import Cases6WebP from '../../images/cases/cases6.webp';
import Cases6WebP2 from '../../images/cases/cases6@2x.webp';

import Cases7Jpg from '../../images/cases/cases7.jpg';
import Cases8Jpg from '../../images/cases/cases8.jpg';

import { Modal } from '../Modal/Modal';

const images = [
  Cases1Jpg,
  Cases2Jpg,
  Cases3Jpg,
  Cases4Jpg,
  Cases5Jpg,
  Cases6Jpg,
  Cases7Jpg,
  Cases8Jpg,
];
export const BusinessCases = ({ casesRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [load, setLoad] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = index => {
    setIndex(index);
    toggleModal();
  };

  const nextImageClick = () => {
    setLoad(true);
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 200);
    setTimeout(() => {
      setLoad(false);
    }, 400);
  };

  const prevImageClick = () => {
    setLoad(true);
    setTimeout(() => {
      setIndex((index + images.length - 1) % images.length);
    }, 200);
    setTimeout(() => {
      setLoad(false);
    }, 400);
  };

  return (
    <>
    
        <Wrapper ref={casesRef}>
          <Span>This is what we do</Span>
          <H2>Business Cases</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </P>

          <Ul>
            <Li onClick={() => handleClick(0)}>
              <picture>
                <source srcSet={`${Cases1WebP} 1x, ${Cases1WebP2} 2x`} />
                <img
                  srcSet={`${Cases1Jpg} 1x, ${Cases1Jpg2} 2x`}
                  alt="People"
                  src={Cases1Jpg}
                />
              </picture>
              <Overlay />
            </Li>
            <Li onClick={() => handleClick(1)}>
              <picture>
                <source srcSet={`${Cases2WebP} 1x, ${Cases2WebP2} 2x`} />
                <img
                  srcSet={`${Cases2Jpg} 1x, ${Cases2Jpg2} 2x`}
                  alt="People"
                  src={Cases1Jpg}
                />
              </picture>
              <Overlay />
            </Li>
            <Li onClick={() => handleClick(2)}>
              <picture>
                <source srcSet={`${Cases3WebP} 1x, ${Cases3WebP2} 2x`} />
                <img
                  srcSet={`${Cases3Jpg} 1x, ${Cases3Jpg2} 2x`}
                  alt="People"
                  src={Cases3Jpg}
                />
              </picture>
              <Overlay />
            </Li>
            <Li onClick={() => handleClick(3)}>
              <picture>
                <source srcSet={`${Cases4WebP} 1x, ${Cases4WebP2} 2x`} />
                <img
                  srcSet={`${Cases4Jpg} 1x, ${Cases4Jpg2} 2x`}
                  alt="People"
                  src={Cases4Jpg}
                />
              </picture>
              <Overlay />
            </Li>
            <Li onClick={() => handleClick(4)}>
              <picture>
                <source srcSet={`${Cases5WebP} 1x, ${Cases5WebP2} 2x`} />
                <img
                  srcSet={`${Cases5Jpg} 1x, ${Cases5Jpg2} 2x`}
                  alt="People"
                  src={Cases1Jpg}
                />
              </picture>
              <Overlay />
            </Li>
            <Li onClick={() => handleClick(5)}>
              <picture>
                <source srcSet={`${Cases6WebP} 1x, ${Cases6WebP2} 2x`} />
                <img
                  srcSet={`${Cases6Jpg} 1x, ${Cases6Jpg2} 2x`}
                  alt="People"
                  src={Cases1Jpg}
                />
              </picture>
              <Overlay />
            </Li>
          </Ul>
        </Wrapper>
        {showModal && (
          <Modal
            onClose={toggleModal}
            onNext={() => {
              nextImageClick();
            }}
            onPrev={() => {
              prevImageClick();
            }}
          >
            {load ? (
              <ThreeCircles
                height="100"
                width="100"
                color="grey"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
              />
            ) : (
              <img alt="people" src={images[index]} />
            )}
          </Modal>
        )}
    
    </>
  );
};
