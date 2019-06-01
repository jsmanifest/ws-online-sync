import {
  INTERNET_ONLINE,
  INTERNET_OFFLINE,
  WS_CONNECTING,
  WS_OPENED,
  WS_CLOSED,
} from '../actions'

const initialState = {
  internet: {
    isOnline: true,
  },
  ws: {
    connecting: false,
    opened: false,
  },
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTERNET_ONLINE:
      return { ...state, internet: { ...state.internet, isOnline: true } }
    case INTERNET_OFFLINE:
      return { ...state, internet: { ...state.internet, isOnline: false } }
    case WS_CONNECTING:
      return { ...state, ws: { ...state.ws, connecting: true } }
    case WS_OPENED:
      return { ...state, ws: { ...state.ws, connecting: false, opened: true } }
    case WS_CLOSED:
      return { ...state, ws: { ...state.ws, connecting: false, opened: false } }
    default:
      return state
  }
}

export default appReducer
