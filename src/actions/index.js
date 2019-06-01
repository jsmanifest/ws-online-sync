export const INTERNET_ONLINE = 'INTERNET_ONLINE'
export const INTERNET_OFFLINE = 'INTERNET_OFFLINE'
export const WS_CONNECTING = 'WS_CONNECTING'
export const WS_OPENED = 'WS_OPENED'
export const WS_CLOSED = 'WS_CLOSED'

export const internetOnline = () => ({
  type: INTERNET_ONLINE,
})

export const internetOffline = () => ({
  type: INTERNET_OFFLINE,
})

export const wsConnecting = () => ({
  type: WS_CONNECTING,
})

export const wsOpened = () => ({
  type: WS_OPENED,
})

export const wsClosed = () => ({
  type: WS_CLOSED,
})
