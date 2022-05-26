import React from 'react'
import { Button } from '../../Shared'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  Container,
  SliderContainer,
  LeftSlider,
  RightSlider,
  ButtonGroup,
  ArrowButtonWrapper,
  ArrowButtonInnerContainer
} from './styles'

SwiperCore.use([Navigation])
SwiperCore.use([Autoplay])

export const HomeHero = () => {
  return (
    <Container>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        pagination={{
          "clickable": true
        }}
        breakpoints={{
          "@0.00": {
            "slidesPerView": 1,
            "spaceBetween": 16
          }
        }}
        className="mySwiper"
        navigation={{
          prevEl: '.slidePrev-btn',
          nextEl: '.slideNext-btn'
        }}
      >
        <SwiperSlide>
          <SliderContainer>
            <LeftSlider>
              <p>new NFT</p>
              <div>
                <img src='/images/slider-title-1.png' alt='' />
                <p>
                  NFTHunterz is the all things NFT portal where you can find new and upcoming collections
                </p>
              </div>
              <p>NFT marketplace</p>
            </LeftSlider>
            <RightSlider>
              <img src='/images/home-hero-1.png' alt='' />
            </RightSlider>
          </SliderContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContainer>
            <LeftSlider>
              <p>Popular collections</p>
              <div>
                <img src='/images/slider-title-2.png' className='margin' alt='' />
                <p>
                  Get you own collections or missing some popular one?
                  contact us we will list it on NFTHunterz!
                </p>
                <ButtonGroup>
                  <Button
                    color='orange'
                  >
                    Add Collection
                  </Button>
                  <Button
                    outline
                    color='orange'
                  >
                    Offer a Collection
                  </Button>
                </ButtonGroup>
              </div>
              <p>NFT marketplace</p>
            </LeftSlider>
            <RightSlider>
              <img src='/images/home-hero-2.png' alt='' />
            </RightSlider>
          </SliderContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContainer>
            <LeftSlider>
              <p>NFT merch</p>
              <div>
                <img src='/images/slider-title-3.png' className='margin' alt='' />
                <p>
                  Watch how NFTs from your collections are brought into the real world with our Merch portal.Contact us for details!
                </p>
                <ButtonGroup>
                  <Button
                    color='orange'
                  >
                    Add
                  </Button>
                </ButtonGroup>
              </div>
              <p>NFT marketplace</p>
            </LeftSlider>
            <RightSlider>
              <img src='/images/home-hero-3.png' alt='' />
            </RightSlider>
          </SliderContainer>
        </SwiperSlide>
        <ArrowButtonWrapper>
          <ArrowButtonInnerContainer>
            <div className='slidePrev-btn'>
              <BsArrowLeft />
            </div>
            <div className='slideNext-btn'>
              <BsArrowRight />
            </div>
          </ArrowButtonInnerContainer>
        </ArrowButtonWrapper>
      </Swiper>

    </Container>
  )
}
