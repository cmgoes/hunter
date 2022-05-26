import React from 'react'
import { useTheme } from 'styled-components'
import AiOutlineInstagram from '@meronex/icons/ai/AiOutlineInstagram'
import AiOutlineTwitter from '@meronex/icons/ai/AiOutlineTwitter'
import BilDiscord from '@meronex/icons/bi/BilDiscord'

import {
  Container,
  InnerContainer,
  CopyWriteContainer,
  SocialLinks,
  SocialLink
} from './styles'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Container>
      <InnerContainer>
        <CopyWriteContainer>
          <img src={theme.images.footerLogo} alt='' />
          <p>NFT THUNTERS,Inc.All rights reserved</p>
        </CopyWriteContainer>
        <SocialLinks>
          <SocialLink><AiOutlineInstagram /></SocialLink>
          <SocialLink><AiOutlineTwitter /></SocialLink>
          <SocialLink><BilDiscord /></SocialLink>
        </SocialLinks>
      </InnerContainer>
    </Container>
  )
}
