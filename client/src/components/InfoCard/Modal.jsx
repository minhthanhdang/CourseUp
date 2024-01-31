import ReactDOM from 'react-dom';
import { useCallback, useState, useRef, useEffect } from 'react';
import { ClickableOverlay, ScrollOverlay, StyledModal } from './Style';
import PropTypes from 'prop-types';
import useOnOutsideClick from '../../hooks/frontend/useOnOutsideClick';
import useOnEscapeKeyDown from '../../hooks/frontend/useOnEscapeKeyDown';
import Icon from '../shared/Icon';

const Modal = ({
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  renderLink,
  renderContent
}) => {

  const [stateIsOpen, setStateOpen] = useState(false)
  const isControlled = typeof propsIsOpen === 'boolean'
  const isOpen = isControlled ? propsIsOpen : stateIsOpen

  const $modalRef = useRef();
  const $clickableOverlayRef = useRef();

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);

    } else {
      tellParentToClose();
    }
  }, [isControlled, tellParentToClose]);

  useOnOutsideClick($modalRef, isOpen, closeModal, $clickableOverlayRef);
  useOnEscapeKeyDown(isOpen, closeModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const root = document.getElementById('root');
  return (
    <>
      {!isControlled && renderLink({ open: () => setStateOpen(true)})}
      {isOpen && ReactDOM.createPortal(
        <ScrollOverlay>
          <ClickableOverlay elementRef={$clickableOverlayRef}>
            <StyledModal elementRef={$modalRef}>
              {renderContent({ close: closeModal })}
            </StyledModal>
          </ClickableOverlay>
        </ScrollOverlay>,
        root
      )}
    </>
  )
}


const propTypes = {
  withCloseIcon: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  renderLink: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
}


const defaultProps = {
  withCloseIcon: true,
  isOpen: undefined,
  onClose: () => {},
  renderLink: () => {},
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
