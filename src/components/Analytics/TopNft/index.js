import React, { useState } from 'react'
import { Select, Pagination } from '../../Shared'
import FaEthereum from '@meronex/icons/fa/FaEthereum'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'

import {
  TopNftContainer,
  HeaderContainer,
  SortWrapper,
  ToggleWrapper,
  CryptoWrapper,
  CurrencyWrapper,
  Toggle,
  TableWrapper,
  CollectionTable,
  Tboday,
  InfoWrapper,
  SortBlock,
  ChainWrapper
} from './styles'

export const TopNft = () => {
  const [isCurrency, setIsCurrency] = useState(false)

  const daysOptions = [
    { value: '1', content: '1 day' },
    { value: '7', content: '7 days' },
    { value: '30', content: '30 days' },
  ]

  const collectionList = [
    { id: 1, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 2, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 3, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 4, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 5, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 6, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 7, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 8, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 9, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    { id: 10, info: { name: 'The Sandbox', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', percent_24: '+122.99', percent_7d: '+12.99', floor_price: '15,8', owners: '16.0K', items: '102.7K'},
    
  ]

  return (
    <TopNftContainer>
      <HeaderContainer>
        <SortWrapper>
          <span>Sort by: </span>
          <Select
            notReload
            placeholder='Select day'
            options={daysOptions}
            defaultValue='7'
            onChange={val => console.log(val)}
          />
        </SortWrapper>
        <ToggleWrapper>
          <Toggle active={!isCurrency} onClick={() => setIsCurrency(!isCurrency)}>
            <FaEthereum />
          </Toggle>
          <Toggle active={isCurrency} onClick={() => setIsCurrency(!isCurrency)}>$</Toggle>
        </ToggleWrapper>
      </HeaderContainer>
      <TableWrapper>
          <CollectionTable>
            <thead>
              <tr>
                <th>Collection</th>
                <th>
                  <SortBlock>
                    <span>Volumn</span>
                    <FiChevronDown />
                  </SortBlock>
                </th>
                <th>24%</th>
                <th>7d%</th>
                <th>Floor Price</th>
                <th>Owners</th>
                <th>Items</th>
              </tr>
            </thead>
            {collectionList.map((collection, i) => (
              <Tboday
                key={i}
              >
                <tr>
                  <td>
                    <InfoWrapper>
                      <span className='collection-id'>{collection?.id}</span>
                      <img src={collection?.info.photo} alt='' />
                      <span>{collection.info.name}</span>
                    </InfoWrapper>
                  </td>
                  <td>
                    <ChainWrapper>
                      <FaEthereum />
                      <span>{collection.volumn}</span>
                    </ChainWrapper>
                  </td>
                  <td>{collection.percent_24}%</td>
                  <td>{collection.percent_7d}%</td>
                  <td>
                    <ChainWrapper>
                      <FaEthereum />
                      <span>{collection.floor_price}</span>
                    </ChainWrapper>
                  </td>
                  <td>{collection.owners}</td>
                  <td>{collection.items}</td>
                </tr>
              </Tboday>   
            ))}
          </CollectionTable>
          <Pagination
            currentPage={1}
            totalPages={5}
            handleChangePage={() => console.log()}
          />
        </TableWrapper>
    </TopNftContainer>
  )
}
