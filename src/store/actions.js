import * as ku from '../lib/ke-utils'

export const updateCode = (code) => {
  ku.log('actions.updateCode: code', code, 'green')
  return {
    type: 'app/updateCode',
    payload: { code },
  }
}
