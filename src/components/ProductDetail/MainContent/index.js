import React, { useState } from 'react'
import GrClock from '@meronex/icons/gr/GrClock'
import { InnerContainer } from '../../Layout'
import { Button, Modal } from '../../Shared'
import { ProductRate } from './ProductRate'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  Container,
  SwiperWrapper,
  DetailWrapper,
  StarWrapper,
  MarkWrapper,
  Title,
  Description,
  FlavorWrapper,
  RoundBox,
  SizeWrapper,
  SizeBox,
  ContainerWrapper,
  FeatureWrapper,
  SeeMoreWrapper,
  ButtonWrapper,
  ScoreWrapper,
  TitleWrapper
} from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import GoStar from '@meronex/icons/go/GoStar'
import SwiperCore, {
  Navigation,
  Thumbs
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SizeGuide } from './SizeGuide'

SwiperCore.use([Navigation, Thumbs])

export const MainContent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [isSentFeedback, setIsSentFeedback] = useState(false)
  const [isSizeModal, setIsSizeModal] = useState(false)
  const { width } = useWindowSize()

  const gallery = [
    { id: 1, url: '/images/merch-1.jpg' },
    { id: 2, url: '/images/merch-2.jpg' },
    { id: 3, url: '/images/merch-3.jpg' },
    { id: 4, url: '/images/merch-2.jpg' },
    { id: 5, url: '/images/merch-1.jpg' },
    { id: 6, url: '/images/merch-3.jpg' },
    { id: 7, url: '/images/merch-1.jpg' },
    { id: 8, url: '/images/merch-2.jpg' },
    { id: 9, url: '/images/merch-1.jpg' },
  ]

  const onCloseRationgModal = () => {
    setOpenModal(false)
    setIsSentFeedback(false)
  }

   return (
      <>
      <ContainerWrapper>
        <InnerContainer>
          <Container>
            <SwiperWrapper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={5}
                direction={width > 768 ? 'vertical' : 'horizontal'}
                loop
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  300: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  400: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  },
                  550: {
                    slidesPerView: 6,
                    spaceBetween: 20
                  },
                  769: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  1000: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  },
                  1400: {
                    slidesPerView: 6,
                    spaceBetween: 20
                  },
                  1600: {
                    slidesPerView: 7,
                    spaceBetween: 20
                  }
                }}
                freeMode
                watchSlidesProgress
                className='product-thumb'
              >
                {gallery.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img src={item.url} alt='' />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }} className='mySwiper2'
              >
                {gallery.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img src={item.url} alt='' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrapper>
            <DetailWrapper>
              <StarWrapper>
                <Mark mark={4} />
                <span onClick={() => setOpenModal(true)}>50 invoces</span>
              </StarWrapper>
              <Title>CryptoPunks NFT Collage Collection NFT Crypto Art Classic T-Shirt</Title>
              <Description>Men's Golf Polo. Designed and sold by <span>milkteadreams</span></Description>
              <FlavorWrapper>
                <p>Select flavor</p>
                <div>
                  <RoundBox bgColor='#c4c4c4' />
                  <RoundBox bgColor='#fff' />
                  <RoundBox bgColor='#111' borderColor='#fb672d' />
                  <RoundBox bgColor='#35512e' />
                </div>
              </FlavorWrapper>
              <SizeWrapper>
                <p>Size <span onClick={() => setIsSizeModal(true)}>View size guide</span></p>
                <div>
                  <SizeBox isDisabled noSvg>
                    <span>XS</span>
                  </SizeBox>
                  <SizeBox>
                    <GrClock />
                    <span>XS</span>
                  </SizeBox>
                  <SizeBox noSvg>
                    <span>M</span>
                  </SizeBox>
                  <SizeBox>
                    <GrClock />
                    <span>XS</span>
                  </SizeBox>
                  <SizeBox noSvg active>
                    <span>XL</span>
                  </SizeBox>
                </div>
              </SizeWrapper>
              <FeatureWrapper>
                <h2>Features</h2>
                <p>Heavyweight 5.3 oz / 160 gsm fabric, solid colors are 100% preshrunk cotton, heather grey is 90% cotton/10% ployester, denim heather is 50% cotton/50% polyester....</p>
              </FeatureWrapper>
              <SeeMoreWrapper>
                <h2>See more</h2>
              </SeeMoreWrapper>
              <ButtonWrapper>
                <Button color='orange'>Add to cart ---- $70</Button>
              </ButtonWrapper>
            </DetailWrapper>
          </Container>
        </InnerContainer>
      </ContainerWrapper>
      <Modal
        width='450px'
        open={openModal}
        onClose={() => onCloseRationgModal()}
      >
        {isSentFeedback ? (
          <ScoreWrapper>
            <TitleWrapper>
              <h1>Score sent</h1>
              <img src='/images/rate-sent.png' alt='' />
            </TitleWrapper>
            <p>Thank you for helping us improve!</p>
          </ScoreWrapper>
        ) : (
          <ProductRate setIsSentFeedback={setIsSentFeedback} />
        )}
      </Modal>
      <Modal
        width='450px'
        open={isSizeModal}
        onClose={() => {
          setIsSizeModal(false)
        }}
      >
        <SizeGuide />
      </Modal>
    </>
  )
}

const Mark = ({ mark }) => {
  return (
    <MarkWrapper>
      {[...Array(5).keys()].map(i => (
        <GoStar className={i < mark ? 'fill' : ''} key={i} />
      ))}
    </MarkWrapper>
  )
}