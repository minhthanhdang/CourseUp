import { useEffect } from 'react';


const useOnEscapeKeyDown = (isListening, onEscapeKeyDown) => {
  useEffect(() => {
    const handleEscapeKeyDown = (e) => {
      if (e.keyCode === 27) {
        onEscapeKeyDown();
      }
    };

    if (isListening) {
      document.addEventListener('keydown', handleEscapeKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [isListening, onEscapeKeyDown]);
};

export default useOnEscapeKeyDown;
