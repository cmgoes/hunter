import React, { useState } from 'react'
import { InnerContainer } from '../../Layout'
import GoStar from '@meronex/icons/go/GoStar'
import {
  ContainerWrapper,
  RatingWrapper,
  Container,
  RatingDetailWrapper,
  StarWrapper,
  PercentBar,
  Percent,
  FreeShippingWrapper
} from './styles'
import { Modal } from '../../Shared'
import { Return } from './Return'

export const Rating = () => {
  const [returnModal, setReturnModal] = useState(false)

  return (
    <>
      <ContainerWrapper>
        <InnerContainer>
          <Container>
            <RatingWrapper>
              <p>Rating <span>(50 voices)</span></p>
              <RatingDetail mark={5} count={80} />
              <RatingDetail mark={4} count={60} />
              <RatingDetail mark={3} count={40} />
              <RatingDetail mark={2} count={30} />
              <RatingDetail mark={1} count={30} />
            </RatingWrapper>
            <FreeShippingWrapper>
              <h2>Free shipping and returns</h2>
              <p>Free standard shipping on orders of 250,0$ or more</p>
              <p>Shipping may take longer. Check the approximate delivery cdate when you place your order.</p>
              <p>The order can be returned for any reason within 60 days - it's free.</p>
              <span onClick={() => setReturnModal(true)}>Learn more</span>
            </FreeShippingWrapper>
          </Container>
        </InnerContainer>
      </ContainerWrapper>
      <Modal
        width='450px'
        open={returnModal}
        onClose={() => {
          setReturnModal(false)
        }}
      >
        <Return />
      </Modal>
    </>
  )
}

const RatingDetail = (props) => {
  const {
    mark,
    count
  } = props

  return (
    <RatingDetailWrapper>
      <Mark mark={mark}/>
      <PercentBar>
        <Percent style={{ width: `${count}%`}} />
      </PercentBar>
    </RatingDetailWrapper>
  )
}

const Mark = ({ mark }) => {
  return (
    <StarWrapper>
      {[...Array(5).keys()].map(i => (
        <GoStar className={i < mark ? 'fill' : ''} key={i} />
      ))}
    </StarWrapper>
  )
}
