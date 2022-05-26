import React from 'react'
import BiLockAlt from '@meronex/icons/bi/BiLockAlt'
import { useHistory } from 'react-router-dom'

import {
  MerchCardContainer,
  MerchCardHeader,
  MerchCardContent
} from './styles'

export const MerchCard = (props) => {
  const { merch } = props
  const history = useHistory()

  return (
    <MerchCardContainer
      bgimage={merch.image}
      key={merch.id}
      onClick={() => history.push(`/merch/${merch.id}`)}
    >
      <MerchCardHeader>
        <div className='lock-icon'>
          <BiLockAlt />
        </div>
      </MerchCardHeader>
      <MerchCardContent className='card-content'>
        <div>
          <span>{merch.name}</span>
        </div>
        <div>{merch.crpyto}</div>
      </MerchCardContent>
    </MerchCardContainer>
  )
}
