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
              <img src='/images/star-1.png' alt='' />
              <span>Top collections</span>
              <img src='/images/star-2.png' alt='' />
              <span>Top collections</span>
            </div>
          ))}
        </div>
      </div>
    </MarqueeContainer>
  )
}