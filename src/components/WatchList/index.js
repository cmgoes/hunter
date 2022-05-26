import React from 'react'
import { InnerContainer } from '../Layout'
import { ViewCollection } from '../CollectionDetails/ViewCollection'
import {
  Container,
  Header
} from './styles'

export const WatchList = () => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <h1>Watchlist</h1>
          <img src='/images/watch-list.png' alt='' />
        </Header>
        <ViewCollection />
      </InnerContainer>
    </Container>
  )
}
