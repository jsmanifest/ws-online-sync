import React from 'react'
import './styles.css'

const StatusMessage = ({ opened }) => (
  <h5>Your websocket is {opened ? 'opened' : 'not opened'}</h5>
)

const BodyContent = ({ opened }) => (
  <div>
    <p>
      {opened && 'Now go do stuff and have an amazing day!'}
      {!opened &&
        "You can't do anything right now. Make yourself a cup of coffee in the mean time."}
    </p>
  </div>
)

const WebsocketConnection = ({ opened }) => {
  return (
    <div className='wsc-container'>
      <div>
        <StatusMessage opened={opened} />
        <BodyContent opened={opened} />
      </div>
    </div>
  )
}

export default WebsocketConnection

/*
  <div className='wsc-actions'>
    <button type='button' className='wsc-reconnect'>
      Reconnect
    </button>
  </div>
*/
