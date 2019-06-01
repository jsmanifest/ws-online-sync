import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { internetOnline, internetOffline } from '../actions'

const useInternet = () => {
  const dispatchAction = useDispatch()
  const isOnline = useSelector((state) => state.app.internet.isOnline)

  // Registers event listeners to dispatch online/offline statuses to redux
  useEffect(() => {
    const handleOnline = () => {
      dispatchAction(internetOnline())
    }

    const handleOffline = () => {
      dispatchAction(internetOffline())
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return function cleanup() {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [dispatchAction])

  return {
    isOnline,
  }
}

export default useInternet
