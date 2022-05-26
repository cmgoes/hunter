import React, { useState } from 'react'
import { useSession } from '../../../contexts/SessionContext'
import { Modal } from '../../Shared'

import {
  SigninBtn,
  WalletsContainer,
  Title,
  WalletsItemsWrapper,
  WalletItem
} from './styles'

export const SigninButton = (props) => {
  const {
    onCloseSidebar
  } = props

  const [, { login }] = useSession()
  const [openModal, setOpenModal] = useState(false)
  const [isFullList, setIsFullList] = useState(false)

  const wallets = [
    { id: 1, image: '/images/metamask.png', name: 'MetaMask' },
    { id: 2, image: '/images/wallet-connect.png', name: 'WalletConnect' },
    { id: 3, image: '/images/fortmatic.png', name: 'Fortmatic' },
    { id: 4, image: '/images/metamask.png', name: 'MetaMask' },
    { id: 5, image: '/images/metamask.png', name: 'MetaMask' },
    { id: 6, image: '/images/metamask.png', name: 'MetaMask' },
    { id: 7, image: '/images/metamask.png', name: 'MetaMask' }
  ]

  const handleConnectWallet = () => {
    login()
    setOpenModal(false)
  }

  const handleSigninClick = () => {
    onCloseSidebar && onCloseSidebar()
    setOpenModal(true)
  }

  return (
    <>
      <SigninBtn
        onClick={() => handleSigninClick()}
      >
        Sign in
      </SigninBtn>
      <Modal
        width='550px'
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          setIsFullList(false)
        }}
      >
        <WalletsContainer>
          <Title>Connect to a wallet</Title>
          <WalletsItemsWrapper>
            {wallets.slice(0, isFullList ? wallets.length : 3).map(wallet => (
              <WalletItem
                key={wallet.id}
                onClick={() => handleConnectWallet()}
              >
                <img src={wallet.image} alt='' />
                <span>{wallet.name}</span>
              </WalletItem>
            ))}
            {!isFullList && (
              <WalletItem
                onClick={() => setIsFullList(true)}
              >
                <p>Show more options</p>
              </WalletItem>
            )}
          </WalletsItemsWrapper>
        </WalletsContainer>
      </Modal>
    </>
  )
}