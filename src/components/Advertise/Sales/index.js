import React from 'react'
import { Button } from '../../Shared'
import { SaleCard } from './SaleCard'

import {
  Container,
  Header
} from './styles'

export const Sales = (props) => {
  const {
    title,
    isShowButton
  } = props

  return (
    <Container>
      <Header>
        {title}
        {isShowButton && (
          <Button
            outline
            color='orange'
          >
            Submit Project
          </Button>
        )}
      </Header>
      <SaleCard />
      <SaleCard />
    </Container>
  )
}
