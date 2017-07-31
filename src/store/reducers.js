import { combineReducers } from 'redux';
import * as ku from '../lib/ke-utils'

export const code = (state = '// write some code', { type, payload }) => {
  ku.log('reducers.code: type', type, 'orange')
  ku.log('reducers.code: payload', payload, 'orange')
  switch (type) {
    case 'app/updateCode':
      return payload.code;
    default:
      return state;
  }
};

export default combineReducers({
  code,
})
