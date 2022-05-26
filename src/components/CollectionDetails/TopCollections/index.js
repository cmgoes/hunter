import React from 'react'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { InnerContainer } from '../../Layout'
import { Select } from '../../Shared'

import {
  Container,
  Header,
  ArrowButtonWrapper,
  ItemContainer,
  ItemContent
} from './styles'

SwiperCore.use([Navigation])

export const TopCollections = () => {
  const collectionOptions = [
    { value: 'collections1', content: 'Collections 1' },
    { value: 'collections2', content: 'Collections 2' },
    { value: 'collections3', content: 'Collections 3' }
  ]
  const daysOptions = [
    { value: '1', content: '1 day' },
    { value: '7', content: '7 days' },
    { value: '30', content: '30 days' },
  ]
  const collections = [
    { id: 1, image: '/images/crypto-punk-1.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true },
    { id: 2, image: '/images/crypto-punk-2.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: false },
    { id: 3, image: '/images/crypto-punk-3.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true },
    { id: 4, image: '/images/crypto-punk-4.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true },
    { id: 5, image: '/images/crypto-punk-1.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: false },
    { id: 6, image: '/images/crypto-punk-3.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true },
    { id: 7, image: '/images/crypto-punk-4.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: false },
    { id: 8, image: '/images/crypto-punk-2.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true },
    { id: 9, image: '/images/crypto-punk-1.png', name: 'House of Theroem', crypto: '1.4296 ETN' , rate: '10.3', rise: true }
  ]
  return (
    <Container>
      <InnerContainer>
        <Header>
          <div>
            <h1>Top</h1>
            <Select
              notReload
              placeholder='Select collection'
              options={collectionOptions}
              defaultValue='collections1'
              onChange={val => console.log(val)}
            />
          </div>
          <div>
            <h1>In</h1>
            <Select
              notReload
              placeholder='Select day'
              options={daysOptions}
              defaultValue='1'
              onChange={val => console.log(val)}
            />
          </div>
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
              "slidesPerView": 2,
              "spaceBetween": 32
            },
            1024: {
              "slidesPerView": 3,
              "spaceBetween": 32
            },
            1440: {
              "slidesPerView": 4,
              "spaceBetween": 32
            }
          }}
          className="collections-swiper"
          navigation={{
            prevEl: '.slidePrev-btn',
            nextEl: '.slideNext-btn'
          }}
        >
          {collections.map((collection, i) => (
            <SwiperSlide key={collection.id}>
              <ItemContainer key={i}>
                <span>{i + 1}</span>
                <img src={collection.image} alt='' />
                <ItemContent>
                  <span>{collection.name}</span>
                  <div>
                    <span>{collection.crypto}</span>
                    <span className={
                      `${collection.rise ? '' : 'warning'}`
                    }>
                      {collection.rise ? '+' : '-'} {collection.rate}%
                    </span>
                  </div>
                </ItemContent>
              </ItemContainer>
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
