import { useEffect, useRef } from 'react';

import useCompareMemo from './useCompareMemo';

const useOnOutsideClick = (
  $ignoredRefs,
  isListening,
  onOutsideClick,
  $listenerRef,
) => {
  const $targetRef = useRef();
  const $ignoredRefsMemo = useCompareMemo([$ignoredRefs].flat());

  useEffect(() => {
    const handleMouseDown = (event) => {
      $targetRef.current = event.target;
    };

    const handleMouseUp = event => {
      const isAnyIgnoredElementAncestorOfTarget = $ignoredRefsMemo.some(
        $elementRef =>
          $elementRef.current.contains($targetRef.current) ||
          $elementRef.current.contains(event.target),
      );
      if (event.button === 0 && !isAnyIgnoredElementAncestorOfTarget) {
        onOutsideClick();
      }
    };

    const $listener = ($listenerRef || {}).current || document;

    if (isListening) {
      $listener.addEventListener('mousedown', handleMouseDown);
      $listener.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      $listener.removeEventListener('mousedown', handleMouseDown);
      $listener.removeEventListener('mouseup', handleMouseUp);
    };
  }, [$ignoredRefsMemo, $listenerRef, isListening, onOutsideClick]);
};

export default useOnOutsideClick;
