import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      setAppStatus('error')
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length) {
        setCurrentAccount(addressArray[0])
        setAppStatus('connected')
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      setAppStatus('error')
    }
  }

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectWallet }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
