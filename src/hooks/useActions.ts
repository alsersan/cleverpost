import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppDispatch, actionCreators } from 'state';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};
