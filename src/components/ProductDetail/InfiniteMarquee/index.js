import React from 'react'

import {
  MarqueeContainer
} from './styles'

export const InfiniteMarquee = () => {
  return (
    <MarqueeContainer>
      <div className='track'>
        <div className='content'>
          {[...Array(50).keys()].map(i => (
            <div
              key={i}
            >
              <img src='/images/product-star1.png' alt='' />
              <span>UNIQUE THINGS</span>
              <img src='/images/product-star2.png' alt='' />
              <span>UNIQUE THINGS</span>
            </div>
          ))}
        </div>
      </div>
    </MarqueeContainer>
  )
}