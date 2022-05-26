import React from 'react'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Button } from '../../Shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  Container,
  InnerContainer,
  Header,
  CardContainer,
  CardContent,
  ArrowButtonWrapper
} from './styles'

SwiperCore.use([Navigation])

export const NewCollections = () => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <div>
            <h1>New collections</h1>
            <img src='/images/fire.png' alt='' />
          </div>
          <Button
            outline
            color='orange'
          >
            See all
          </Button>
        </Header>
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          navigation={true}
          pagination={{
            "clickable": true
          }}
          breakpoints={{
            0: {
              "slidesPerView": 1,
              "spaceBetween": 32
            },
            768: {
              "slidesPerView": 3,
              "spaceBetween": 32
            },
            1024: {
              "slidesPerView": 4,
              "spaceBetween": 32
            },
            1440: {
              "slidesPerView": 5,
              "spaceBetween": 32
            }
          }}
          className="collections-swiper"
          navigation={{
            prevEl: '.slidePrev-btn',
            nextEl: '.slideNext-btn'
          }}
        >
          {[...Array(7).keys()].map(i => (
            <SwiperSlide key={i}>
              <CardContainer
                bgimage='/images/collection-1.png'
              >
                <CardContent>
                  <p>House of Theorem</p>
                  <div>
                    <img src='/images/user-1.png' alt='' />
                    <span>@loremipsum</span>
                  </div>
                </CardContent>
              </CardContainer>
            </SwiperSlide>
          ))}
          <ArrowButtonWrapper>
            <div className='slidePrev-btn'>
              <BsArrowLeft />
            </div>
            <div className='slideNext-btn'>
              <BsArrowRight />
            </div>
          </ArrowButtonWrapper>
        </Swiper>
      </InnerContainer>
    </Container>
  )
}
