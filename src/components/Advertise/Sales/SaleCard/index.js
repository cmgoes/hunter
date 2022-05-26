import React from 'react'
import AiOutlineTwitter from '@meronex/icons/ai/AiOutlineTwitter'
import BilDiscord from '@meronex/icons/bi/BilDiscord'
import GoGlobe from '@meronex/icons/go/GoGlobe'

import {
  CardContainer,
  ImageWrapper,
  SaleContent,
  GeneralInfo,
  NameWrapper,
  SocialLinksContainer,
  SocialLink,
  SaleDetailsContainer,
  SaleDetailItem
} from './styles'

export const SaleCard = (props) => {
  const {
    noDetail
  } = props
  return (
    <CardContainer className='sale-card'>
      <ImageWrapper>
        <img src='/images/sale-1.png' alt='' />
      </ImageWrapper>
      <SaleContent>
        <GeneralInfo>
          <NameWrapper>
            <span>WebZee</span>
            <span>3,450 Total</span>
          </NameWrapper>
          <p>Unique street art inspired NFT collection by WebZee</p>
          <SocialLinksContainer>
            <SocialLink>
              <BilDiscord /> <span>Discord</span>
            </SocialLink>
            <SocialLink>
              <AiOutlineTwitter /> <span>@WebzeeNFT</span>
            </SocialLink>
            <SocialLink>
              <GoGlobe /> <span>Webzee.co</span>
            </SocialLink>
          </SocialLinksContainer>
        </GeneralInfo>
        {!noDetail && (
          <SaleDetailsContainer>
            <SaleDetailItem>
              <span className='title'>Sale: </span>
              <p>8:00 PM Wednesday,</p>
              <p>December 15th 2021</p>
              <span className='currency'>0.1 ETH</span>
            </SaleDetailItem>
            <SaleDetailItem>
              <span className='title'>Presale: </span>
              <p>1:00 PM Wednesday,</p>
              <p>December 15th 2021</p>
              <span className='currency'>0.1 ETH</span>
            </SaleDetailItem>
          </SaleDetailsContainer>
        )}
      </SaleContent>
    </CardContainer>
  )
}
