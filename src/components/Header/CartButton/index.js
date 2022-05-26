import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BisLockAlt from '@meronex/icons/bi/BisLockAlt'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Button, Modal } from '../../Shared'
import { Cart } from './Cart'
import { useWindowSize } from "../../../hooks/useWindowSize"
import BiWallet from '@meronex/icons/bi/BiWallet'
import BsCreditCard from '@meronex/icons/bs/BsCreditCard'
import AiFillCheckCircle from '@meronex/icons/ai/AiFillCheckCircle'

import {
  IconButton,
  CartsContainer,
  OverLay,
  Header,
  CartsList,
  ButtonWrapper,
  WalletItem,
  ModalTitle,
  WalletsItemsWrapper,
  WalletsContainer,
  WalletProcessingContainer,
  WalletProcessHeader,
  ProcessCarts,
  ProcessContent,
  ProcessNotification,
  CompleteContainer
} from './styles'

export const CartButton = () => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const  [processed, setProcessed] = useState(false)
  const [complete, setComplete] = useState(false)
  const { width } = useWindowSize()

  const carts = [
    { id: 1, image: '/images/merch-3.jpg' },
    { id: 2, image: '/images/merch-3.jpg' }
  ]

  const carts2 = [
    { id: 1, image: '/images/hat.png' },
    { id: 2, image: '/images/hat.png' }
  ]

  useEffect(() => {
    if (!processed) return
    setTimeout(() => {
      setComplete(true)
    }, 2000)
  }, [processed, complete])

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <BisLockAlt />
      </IconButton>
      <CartsContainer
        style={{
          marginRight: open ? "0px" : width >= 768 ? "-500px" : "-100vw"
        }}
      >
        <Header>
          <BsArrowLeft
            onClick={() => setOpen(false)}
          />
          <span>My cart(2)</span>
        </Header>
        <CartsList>
          {carts.map(cart => (
            <Cart
              key={cart.id}
              cart={cart}
            />
          ))}
        </CartsList>
        <ButtonWrapper>
          <Button
            color='orange'
            onClick={() => {
              setOpenModal(true)
            }}
          >
            Check out - 4.84 ETH
          </Button>
        </ButtonWrapper>
      </CartsContainer>
      {open && <OverLay onClick={() => setOpen(false)} />}

      <Modal
        width='650px'
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          setProcessed(false)
          setComplete(false)
        }}
      >
        {!processed && (
          <WalletsContainer>
            <ModalTitle>Choose a payment method</ModalTitle>
            <WalletsItemsWrapper>
              <WalletItem
                onClick={() => setProcessed(true)}
              >
                <BiWallet />
                <span>Wallet</span>
              </WalletItem>
              <WalletItem
                onClick={() => {
                  history.push('/card-payment')
                  setOpenModal(false)
                  setOpen(false)
                }}
              >
                <BsCreditCard />
                <span>Card</span>
              </WalletItem>
            </WalletsItemsWrapper>
          </WalletsContainer>
        )}

        {processed && (
          <>
            {!complete ? (
              <WalletProcessingContainer>
                <WalletProcessHeader>
                  <img src='/images/loading.png' alt='' />
                  <span>Processing</span>
                </WalletProcessHeader>
                <ProcessNotification>
                  <h4>Your purchase is processing!</h4>
                  <p>
                    Woot! You just purchased CryptoPunks NFT T-shirt and CryptoPunks
                    NFT Cap. It should be cofirmed on the blockchain shortly.
                  </p>
                  <div>
                    <span>Transaction Hash</span>
                    <span>0x0593...5976</span>
                  </div>
                </ProcessNotification>
                <ProcessContent>
                  <ProcessCarts>
                    {carts2.map(cart => (
                      <Cart
                        key={cart.id}
                        cart={cart}
                        noCancel
                      />
                    ))}
                  </ProcessCarts>
                </ProcessContent>
              </WalletProcessingContainer>
            ) : (
              <CompleteContainer>
                <div>
                  <AiFillCheckCircle />
                  <span>Complete</span>
                </div>
                <p>
                  Woot! You just purchased CryptoPunks NFT T-shirt and CryptoPunks
                  NFT Cap. It should be cofirmed on the blockchain shortly.
                </p>
                <Button
                  outline
                  color='orange'
                  onClick={() => {
                    history.push('/merch')
                    setOpenModal(false)
                    setOpen(false)
                    setProcessed(false)
                    setComplete(false)
                  }}
                >
                  Keep Shopping
                </Button>
              </CompleteContainer>
            )}
          </>
        )}
      </Modal>
    </>
  )
}