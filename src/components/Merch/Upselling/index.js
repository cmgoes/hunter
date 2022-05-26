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
  TitleWrapper,
  SwiperWrapper,
  ArrowButtonWrapper
} from './styles'
import { MerchCard } from '../MerchCard'

export const Upselling = () => {

  const upsellingList = [
    { id: 1, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 2, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 3, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 4, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 5, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 6, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 7, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 8, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 9, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 10, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 11, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 12, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 13, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 14, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 15, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
  ]

  return (
    <Container>
      <TitleWrapper>
        <h1>You may also like</h1>
        <img src='images/upselling.png' alt='' />
      </TitleWrapper>
      <SwiperWrapper>
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
          {upsellingList.map((merch, i) => (
            <SwiperSlide key={i}>
              <MerchCard
                merch={merch}
              />
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
      </SwiperWrapper>
    </Container>
  )
}
