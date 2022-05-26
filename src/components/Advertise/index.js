import React from 'react'
import { InnerContainer } from '../Layout'
import { UpcomingNFTSales } from './UpcomingNFTSales'
import { Sales } from './Sales'
import { SaleCard } from './Sales/SaleCard'

import {
  Container,
  SectionTitle,
  AnnounceContainer
} from './styles'

export const Advertise = () => {
  return (
    <Container>
      <InnerContainer>
        <UpcomingNFTSales isForceOpen />

        <Sales
          title={
            <SectionTitle>
              <span>Today's Sales</span>
              <img src='/images/sale.png' alt='' />
            </SectionTitle>
          }
          isShowButton
        />
        <Sales
          title={
            <SectionTitle>
              <span>Tommorrow's Sales</span>
              <img src='/images/sale.png' alt='' />
            </SectionTitle>
          }
        />
        <AnnounceContainer>
          <SectionTitle className='title'>
            <span>To Be Announced</span>
            <img src='/images/announce.png' alt='' />
          </SectionTitle>
          <SaleCard noDetail />
          <SaleCard noDetail />
        </AnnounceContainer>
      </InnerContainer>
    </Container>
  )
}
