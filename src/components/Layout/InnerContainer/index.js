import React from 'react'

import { Container, ChildrenWrapper } from './styles'
export const InnerContainer = (props) => {
  return (
    <Container>
      <ChildrenWrapper>
        {props.children}
      </ChildrenWrapper>
    </Container>
  )
}