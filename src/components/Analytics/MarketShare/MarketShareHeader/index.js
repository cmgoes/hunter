import React from 'react'
import {
  Container,
  CardContent
} from './styles'

export const MarketShareHeader = () => {
  return (
    <Container bgimage='/images/collection-detail-1.png'>
      <CardContent>
        <div>
          <img src='/images/user-2.png' alt='' />
          <span>@loremipsum</span>
        </div>
        <h1>PET LIGER</h1>
        <p>
          Missed out on Chubbicorn? All good, you can adopt a Chubbinfren.
          This is an official Chubbiverse collection of 8888 cute NFTs.
        </p>
      </CardContent>
    </Container>
  )
}
