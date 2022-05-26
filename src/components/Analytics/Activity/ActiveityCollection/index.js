import React from 'react'
import { SearchBar } from '../../../Header/SearchBar'
import { Select } from '../../../Shared'
import {
  ActiveityCollectionContainer,
  HeaderWrapper,
  SeachWrapper,
  SelectWrapper,
  ContentWrapper,
  NoneFound
} from './styles'

export const ActiveityCollection = () => {
  const daysOptions = [
    { value: '1', content: '1 day' },
    { value: '7', content: '7 days' },
    { value: '30', content: '30 days' },
  ]

  return (
    <ActiveityCollectionContainer>
      <HeaderWrapper>
        <SeachWrapper>
          <SearchBar
            placeholder='Search collections'
            onChange={(val) => console.log(val)}
          />
        </SeachWrapper>
        <SelectWrapper>
          <Select
            notReload
            placeholder='Select day'
            options={daysOptions}
            defaultValue='7'
            onChange={val => console.log(val)}
          />
        </SelectWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <NoneFound>
          <span>None found</span>
        </NoneFound>
      </ContentWrapper>
    </ActiveityCollectionContainer>
  )
}