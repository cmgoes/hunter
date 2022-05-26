import React from 'react'
import { InnerContainer } from '../Layout'
import { FilterBar } from './FilterBar'
import { SearchBar } from '../Header/SearchBar'
import { Select, Pagination } from '../Shared'
import {
  Container,
  MerchandiseSection,
  MerchListWrapper,
  MerchListHeader,
  SearchBarWrapper,
  SortWrapper,
  TitleWrapper,
  MerchList
} from './styles'
import { MerchCard } from './MerchCard'
import { Upselling } from './Upselling'
import { ContactForm } from './ContactForm'

export const Merch = () => {
  const sortByOptions = [
    { value: 'popular', content: 'Popular' },
    { value: 'latest', content: 'Latest' }
  ]

  const merchList = [
    { id: 1, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 2, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 3, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 4, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 5, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 6, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 7, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 8, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 9, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 10, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 11, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 12, image: '/images/merch-2.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 13, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 14, image: '/images/merch-3.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
    { id: 15, image: '/images/merch-1.jpg', name: 'Printed t-shirt', crpyto: '1.42 SOL' },
  ]

  return (
    <Container>
      <InnerContainer>
        <TitleWrapper>

        </TitleWrapper>
        <MerchandiseSection>
          <FilterBar />
          <MerchListWrapper>
            <MerchListHeader>
              <SearchBarWrapper>
                <SearchBar
                  placeholder='Search'
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
                {/* <ToggleWrapper>
                  <Toggle active={!isCurrency} onClick={() => setIsCurrency(!isCurrency)}>
                    <FaEthereum />
                  </Toggle>
                  <Toggle active={isCurrency} onClick={() => setIsCurrency(!isCurrency)}>$</Toggle>
                </ToggleWrapper> */}
              </div>
            </MerchListHeader>
            <MerchList>
              {merchList.map(merch => (
                <MerchCard
                  key={merch.id}
                  merch={merch}
                />
              ))}
            </MerchList>
            <Pagination
              currentPage={1}
              totalPages={5}
              handleChangePage={() => console.log()}
            />
          </MerchListWrapper>
        </MerchandiseSection>
        <Upselling />
        <ContactForm />
      </InnerContainer>
    </Container>
  )
}
