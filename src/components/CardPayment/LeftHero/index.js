import React from 'react'
import BsArrowLeftShort from '@meronex/icons/bs/BsArrowLeftShort'

import {
  Container,
  ContentWrapper,
  HeaderWrapper,
  PaymentRound,
  TestModeWrapper,
  PriceWrapper,
  FooterWrapper,
  ProductListWrapper
} from './styles'
import { ProductItem } from './ProductItem'

export const LeftHero = () => {
  const productList = [
    { id: 1, name: 'Pure set', image: '/images/payment-product1.png', qty: 1, price: 65, each: null },
    { id: 2, name: 'Pure glow cream', image: '/images/payment-product1.png', qty: 2, price: 64, each: 32 },
  ]

  return (
    <Container>
      <ContentWrapper>
        <HeaderWrapper>
          <BsArrowLeftShort />
          <PaymentRound>P</PaymentRound>
          <span>Powder</span>
          <TestModeWrapper>
            <span>TEST MODE</span>
          </TestModeWrapper>
        </HeaderWrapper>
        <PriceWrapper>
          <p>Pay Powdur</p>
          <h1>$129.00</h1>
        </PriceWrapper>
        <ProductListWrapper>
          {productList.map((product, i) => (
            <ProductItem
              key={i}
              product={product}
            />
          ))}
        </ProductListWrapper>
        <FooterWrapper>
          <span>Powered by <span>Stripe</span></span>
          <span>Terms</span>
          <span>Privacy</span>
        </FooterWrapper>
      </ContentWrapper>
    </Container>
  )
}
