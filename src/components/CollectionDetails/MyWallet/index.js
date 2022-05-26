import React from 'react'
import { Button } from '../../Shared'

import {
  Container,
  ButtonWrapper
} from './styles'

export const MyWallet = () => {
  return (
    <Container>
      <ButtonWrapper>
        <Button
          outline
          color='orange'
        >
          Connect Wallet
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
