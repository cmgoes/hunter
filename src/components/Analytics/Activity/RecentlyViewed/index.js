import React from 'react'
import { CollectionCard } from './CollectionCard'
import { Pagination } from '../../../Shared'
import {
  RecentlyViewedContainer,
  TitleWrapper,
  CollectionList
} from './styles'

export const RecentlyViewed = () => {
  return (
    <RecentlyViewedContainer>
      <TitleWrapper>
        <h1>Recently Viewed</h1>
        <img src='/images/recently-viewed.png' alt='' />
      </TitleWrapper>
      <CollectionList>
        {[...Array(4).keys()].map(index => (
          <CollectionCard key={index} />
        ))}
      </CollectionList>
      <Pagination
        currentPage={1}
        totalPages={5}
        handleChangePage={() => console.log()}
      />
    </RecentlyViewedContainer>
  )
}
