import React, { useState } from 'react'
import { Select, Pagination } from '../../Shared'
import BiTargetLock from '@meronex/icons/bi/BiTargetLock'
import { SearchBar } from '../../Header/SearchBar'
import { FilterBar } from '../FilterBar'
import FaEthereum from '@meronex/icons/fa/FaEthereum'

import {
  Container,
  CollectionsList,
  CollectionsHeader,
  SortWrapper,
  SearchBarWrapper,
  CollectionsWrapper,
  CollectionCard,
  CollectionCardHeader,
  CollectionCardContent,
  ToggleWrapper,
  Toggle
} from './styles'

export const ViewCollection = () => {
  const [isCurrency, setIsCurrency] = useState(false)

  const sortByOptions = [
    { value: 'popular', content: 'Popular' },
    { value: 'latest', content: 'Latest' }
  ]

  const collections = [
    { id: 1, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 2, image: '/images/collection-2.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 3, image: '/images/collection-3.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 4, image: '/images/collection-4.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 5, image: '/images/collection-5.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 6, image: '/images/collection-6.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 7, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 8, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 9, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 10, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 11, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 12, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 13, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 14, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
    { id: 15, image: '/images/collection-1.png', name: 'House #1918', crpyto: '1.4296 ETN' },
  ]

  return (
    <Container>
      <FilterBar />
      <CollectionsList>
        <CollectionsHeader>
          <SearchBarWrapper>
            <SearchBar
              placeholder='ID'
            />
          </SearchBarWrapper>
          <div>
            <SortWrapper>
              <span>Sort by: </span>
              <Select
                notReload
                placeholder='Select sort option'
                options={sortByOptions}
                defaultValue='popular'
                onChange={val => console.log(val)}
              />
            </SortWrapper>
            <ToggleWrapper>
              <Toggle active={!isCurrency} onClick={() => setIsCurrency(!isCurrency)}>
                <FaEthereum />
              </Toggle>
              <Toggle active={isCurrency} onClick={() => setIsCurrency(!isCurrency)}>$</Toggle>
            </ToggleWrapper>
          </div>
        </CollectionsHeader>

        <CollectionsWrapper>
          {collections.map(collection => (
            <CollectionCard
              bgimage={collection.image}
              key={collection.id}
            >
              <CollectionCardHeader>
                <span>#1</span>
                <div>
                  <img src='/images/user-1.png' alt='' />
                  <img src='/images/user-2.png' alt='' />
                </div>
              </CollectionCardHeader>
              <CollectionCardContent>
                <div>
                  <span>{collection.name}</span>
                  <BiTargetLock />
                </div>
                <div>{collection.crpyto}</div>
              </CollectionCardContent>
            </CollectionCard>
          ))}
        </CollectionsWrapper>
        <Pagination
          currentPage={1}
          totalPages={5}
          handleChangePage={() => console.log()}
        />
      </CollectionsList>
    </Container>
  )
}
