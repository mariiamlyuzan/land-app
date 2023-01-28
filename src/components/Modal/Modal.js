import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Backdrop, Content, Wrapper, Box } from './Modal.styled';

let iconStyles = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  cursor: 'pointer',
};

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose, onNext, onPrev }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <IconContext.Provider value={{ size: '30px', color: '#D3D3D3' }}>
          <FaTimes
            onClick={() => onClose()}
            style={iconStyles}
            onMouseOver={({ target }) => (target.style.color = '#808080')}
            onMouseOut={({ target }) => (target.style.color = '#D3D3D3')}
          />
          <Box>
            <FaAngleLeft onClick={onPrev} />
          </Box>
          <Wrapper>{children}</Wrapper>
          <Box>
            <FaAngleRight onClick={onNext} />
          </Box>
        </IconContext.Provider>
      </Content>
    </Backdrop>,
    modalRoot,
  );
}
