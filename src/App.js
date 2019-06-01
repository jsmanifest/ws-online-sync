import React, { useEffect } from 'react'
import useInternet from './hooks/useInternet'
import useWebsocket from './hooks/useWebsocket'
import WebsocketConnection from './components/WebsocketConnection'
import './App.css'

const App = () => {
  const { isOnline } = useInternet()
  const { ws, opened, initWebsocket, endWebsocket } = useWebsocket({ isOnline })
  console.log(ws)
  useEffect(() => {
    console.log(
      `%cYou are ${isOnline ? 'online' : 'offline'}.`,
      `color:${isOnline ? 'green' : 'red'}`,
    )
  }, [isOnline])

  return (
    <div>
      <h1>Making Websocket in Sync with the User's Internet Connectivity</h1>
      <hr />
      <WebsocketConnection opened={opened} />
      <div className='button-controls'>
        <button type='button' onClick={initWebsocket}>
          Initiate Websocket
        </button>
        <button type='button' onClick={endWebsocket}>
          End Websocket
        </button>
      </div>
    </div>
  )
}

export default App
