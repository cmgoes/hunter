import React, { useState } from 'react'
import { Button } from '../../../Shared'
import GoStar from '@meronex/icons/go/GoStar'
import {
  Container,
  StarWrapper,
  ButtonWrapper
} from './styles'

export const ProductRate = (props) => {
  const { setIsSentFeedback } = props

  const [count, setCount] = useState(3)
  return (
    <Container>
      <h1>Please rate the product</h1>
      <StarWrapper>
        {[...Array(5).keys()].map(i => (
          <GoStar
            className={i < count ? 'fill' : ''}
            key={i}
            onClick={() => setCount(i + 1)}
          />
        ))}
      </StarWrapper>
      <ButtonWrapper>
        <Button
          color='orange'
          outline
          onClick={() => setIsSentFeedback(true)}
        >Send</Button>
      </ButtonWrapper>
    </Container>
  )
}
