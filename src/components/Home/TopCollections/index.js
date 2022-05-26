import React from 'react'
import { Select } from '../../Shared'

import {
  Container,
  InnerContainer,
  Header,
  CollectionsCard,
  ItemContainer,
  ItemContent
} from './styles'

export const TopCollections = () => {
  const daysOptions = [
    { value: '1', content: 'in 1 day' },
    { value: '7', content: 'in 7 days' },
    { value: '30', content: 'in 30 days' },
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
          <h1>Top collections</h1>
          <Select
            notReload
            placeholder='Select day'
            options={daysOptions}
            defaultValue='1'
            onChange={val => console.log(val)}
          />
        </Header>
        <CollectionsCard>
          {collections.map((collection, i) => (
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
          ))}
        </CollectionsCard>
      </InnerContainer>
    </Container>
  )
}
