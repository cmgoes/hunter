import React, { useState } from 'react'
import { SearchBar } from '../../Header/SearchBar'
import { Select, Pagination } from '../../Shared'
import FaEthereum from '@meronex/icons/fa/FaEthereum'
import { FilterBar } from '../FilterBar'

import {
  Container,
  SearchContainer,
  SearchBarWrapper,
  SortWrapper,
  ToggleWrapper,
  Toggle,
  Content,
  TabOptonsContainer,
  FilterTab,
  TableWrapper,
  Examples
} from './styles'

export const ExploreTraits = () => {
  const [isCurrency, setIsCurrency] = useState(false)
  const [selectedFilterTab, setSelectedFilterTab] = useState('rarity_score')

  const sortByOptions = [
    { value: 'popular', content: 'Popular' },
    { value: 'latest', content: 'Latest' }
  ]
  const filterTabs = [
    { key: 'least_count', content: 'Least Count' },
    { key: 'rarity_score', content: 'Rarity score' },
    { key: 'highest_fooore_price', content: 'Highest Fooore Price' },
    { key: 'value_name', content: 'Value Name' }
  ]
  const tableData = [
    { id: 1, value: 9, count: 1, rarity_score: '+1515.52', floore_price: '0.3 ETH', cheapest: '/images/collection-1.png', examples: [ { id: 1, image: '/images/collection-2.png' } ] },
    { id: 2, value: 'Solid Gold', count: 1, rarity_score: '+1515.52', floore_price: '0.3 ETH', cheapest: '/images/collection-3.png', examples: [ { id: 1, image: '/images/collection-1.png' }, { id: 2, image: '/images/collection-2.png' }, { id: 3, image: '/images/collection-3.png' }, { id: 4, image: '/images/collection-4.png' } ] },
    { id: 3, value: 9, count: 1, rarity_score: '+1515.52', floore_price: '', cheapest: '/images/collection-4.png', examples: [ { id: 1, image: '/images/collection-2.png' }, { id: 2, image: '/images/collection-5.png' } ] },
    { id: 4, value: 9, count: 1, rarity_score: '+1515.52', floore_price: '0.3 ETH', cheapest: '/images/collection-5.png', examples: [ { id: 1, image: '/images/collection-3.png' }, { id: 3, image: '/images/collection-4.png' } ] },
  ]
  return (
    <Container>
      <FilterBar />
      <Content>
        <SearchContainer>
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
        </SearchContainer>
        <TabOptonsContainer>
          {filterTabs.map(item => (
            <FilterTab
              key={item.key}
              active={selectedFilterTab === item.key}
              onClick={() => setSelectedFilterTab(item.key)}
            >
              {item.content}
            </FilterTab>
          ))}
        </TabOptonsContainer>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Value</th>
                <th>Count</th>
                <th>Rarity Score</th>
                <th>Floore Price</th>
                <th>Cheapest</th>
                <th>Examples</th>
              </tr>
            </thead>
            {tableData.map(data => (
              <React.Fragment key={data.id}>
                <tbody>
                  <tr>
                    <td>{data.value}</td>
                    <td>{data.count}</td>
                    <td>{data.rarity_score}</td>
                    <td>{data.floore_price}</td>
                    <td>
                      <Examples>
                        <img src={data.cheapest} alt='' />
                      </Examples>
                    </td>
                    <td>
                      <Examples>
                        {data.examples.map(example => (
                          <img
                            key={example.id}
                            src={example.image}
                            alt=''
                          />
                        ))}
                      </Examples>
                    </td>
                  </tr>
                </tbody>
                <tbody className='border' />
              </React.Fragment>
            ))}
          </table>
        </TableWrapper>
        <Pagination
          currentPage={1}
          totalPages={5}
          handleChangePage={() => console.log()}
        />
      </Content>
    </Container>
  )
}
