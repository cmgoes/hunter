import React from 'react'
import {
  Container
} from './styles'

export const Return = () => {
  return (
    <Container>
      <h1>Returns</h1>
      <p>Returns<br />Any returns must be made within 30 days of shipment.</p>
      <p>Return to the point of pickup <span>for FREE</span><br />To return on item at one of our Pickup Points, go to My Account on the website and select the Return to Pickup Point option.</p>
      <p className='disabled'>Cosmetics and perfumes cannot be returned</p>
      <p className='small'>Read the terms and exclusions for returns and exchanges here</p>
    </Container>
  )
}
