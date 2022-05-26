import React from 'react'
import { MainContent } from './MainContent'
import { InfiniteMarquee } from './InfiniteMarquee'
import {
  Container
} from './styles'
import { Rating } from './Rating'
import { TopSeller } from './TopSeller'

export const ProductDetail = () => {
  return (
    <Container>
      <MainContent />
      <InfiniteMarquee />
      <Rating />
      <TopSeller />
    </Container>
  )
}
