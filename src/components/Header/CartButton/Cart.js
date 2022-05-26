import React, { useState } from 'react'
import AiOutlinePlus from '@meronex/icons/ai/AiOutlinePlus'
import AiOutlineMinus from '@meronex/icons/ai/AiOutlineMinus'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  CartCard,
  CartDetails,
  ImageWrapper,
  ButtonsContainer,
  IConButtonWrapper,
  CloseButton
} from './styles'

export const Cart = (props) => {
  const {
    cart,
    noCancel
  } = props
  const [count, setCount] = useState(1)
  return (
    <CartCard>
      {!noCancel && (
        <CloseButton>
          <MdClose />
        </CloseButton>
      )}
      <ImageWrapper>
        <img src={cart.image} alt='' />
      </ImageWrapper>
      <CartDetails>
        <h4>CryptoPunks NFT</h4>
        <p>T-shirt</p>
        <div>
          <span>1.42ETH</span>
          {!noCancel && (
            <ButtonsContainer>
              <IConButtonWrapper
                disabled={count === 1}
                onClick={() => setCount(count - 1)}
              >
                <AiOutlineMinus />
              </IConButtonWrapper>
              <span className='count'>{count}</span>
              <IConButtonWrapper
                onClick={() => setCount(count + 1)}
              >
                <AiOutlinePlus />
              </IConButtonWrapper>
            </ButtonsContainer>
          )}
        </div>
      </CartDetails>
    </CartCard>
  )
}
