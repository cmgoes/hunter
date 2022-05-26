import React from 'react'
import {
  CardContainer,
  CardContent
} from './styles'

export const CollectionCard = () => {
   return (
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
   )
}