import { useState, useCallback } from 'react';
import { isFunction } from 'lodash';

const useMergeState = initState => {
  const [state, setState] = useState(initState || {});

  const mergeState = useCallback(newState => {
    if (isFunction(newState)) {
      setState(currentState => ({ ...currentState, ...newState(currentState) }));
    } else {
      setState(currentState => ({ ...currentState, ...newState }));
    }
  }, []);

  return [state, mergeState];
};

export default useMergeState;
