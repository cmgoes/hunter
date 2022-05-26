import React from 'react'
import { useHistory } from 'react-router-dom'
import { SearchBar } from '../../Header/SearchBar'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'
import ReactApexChart from 'react-apexcharts'
import {
  Container,
  HeaderContainer,
  TitleWrapper,
  SearchWrapper,
  Content,
  TableWrapper,
  CollectionTable,
  Tboday,
  InfoWrapper,
  SortWrapper,
  ChartWrapper,
  ButtonWrapper
} from './styles'
import { Button } from '../../Shared'

export const CollectionList = () => {
  const history = useHistory()
  const collectionList = [
    { id: 1, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 2, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 3, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 4, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 5, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 6, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 7, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 8, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'},
    { id: 9, info: { name: 'CryptoPunks', photo: '/images/crypto-punk-1.png'}, volumn: '10,501.14', sales: '98', AVG_price: '107.15', owners: '3.217', market_cap: '1,071,437.74'}
  ]

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      background: 'transparent'
    },
    legend: {
      show: false,
      itemMargin: {
        horizontal: 0,
        vertical: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      labels: {
        show: false
      },
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
    
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: [],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: '#ff6b35',
            opacity: 0.4
          },
          {
            offset: 100,
            color: '#ff6b35',
            opacity: 0.1
          },
        ]
      },
    },
    colors: ['#ff6b35', '#ff6b35'],
    tooltip: {
      enabled: false
    },
    grid: {
      show: false,
    },
    theme: {
      mode: 'dark', 
    }
  }

  const series = [{
    name: 'earnings',
    data: [{ x: 1996, y: 322 },
      { x: 1997, y: 324 },
      { x: 1998, y: 329 },
      { x: 1999, y: 342 },
      { x: 2000, y: 348 },
      { x: 2001, y: 334 },
      { x: 2002, y: 325 },
      { x: 2003, y: 316 },
      { x: 2004, y: 318 },
      { x: 2005, y: 330 },
      { x: 2006, y: 355 },
      { x: 2007, y: 366 },
      { x: 2008, y: 337 },
      { x: 2009, y: 352 },
      { x: 2010, y: 377 },
      { x: 2011, y: 383 },
      { x: 2012, y: 344 },
      { x: 2013, y: 366 },
      { x: 2014, y: 389 },
      { x: 2015, y: 334}
    ]
  }]

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <TitleWrapper>
            <h1>All collections</h1>
            <img src='/images/all-collections.png' alt='' />
          </TitleWrapper>
          <SearchWrapper>
            <SearchBar
              placeholder='Search collections'
              onSearch={val => console.log(val)}
            />
          </SearchWrapper>
        </HeaderContainer>
        <TableWrapper>
          <CollectionTable>
            <thead>
              <tr>
                <th>#</th>
                <th>Collection</th>
                <th>
                  <SortWrapper>
                    <span>Volumn 7d</span>
                    <FiChevronDown />
                  </SortWrapper>
                </th>
                <th>
                  <SortWrapper>
                    <span>Sales</span>
                    <FiChevronDown />
                  </SortWrapper>
                </th>
                <th>
                  <SortWrapper>
                    <span>AVG price 7d</span>
                    <FiChevronDown />
                  </SortWrapper>
                </th>
                <th>
                  <SortWrapper>
                    <span>Owners</span>
                    <FiChevronDown />
                  </SortWrapper>
                </th>
                <th>
                  <SortWrapper>
                    <span>Estimted Market Cap</span>
                    <FiChevronDown />
                  </SortWrapper>
                </th>
                <th>Velocity</th>
              </tr>
            </thead>
            {collectionList.map((collection, i) => (
              <Tboday
                key={i}
                onClick={() => history.push(`/collections/${collection.id}`)}
              >
                <tr>
                  <td>{collection?.id}</td>
                  <td>
                    <InfoWrapper>
                      <img src={collection?.info.photo} alt='' />
                      <span>{collection.info.name}</span>
                    </InfoWrapper>
                  </td>
                  <td>{collection.volumn}</td>
                  <td>{collection.sales}</td>
                  <td>{collection.AVG_price}</td>
                  <td>{collection.owners}</td>
                  <td>{collection.market_cap}</td>
                  <td className='chart-item'>
                    <ChartWrapper>
                      <ReactApexChart options={options} series={series} type="area" />
                    </ChartWrapper>
                  </td>
                </tr>
              </Tboday>   
            ))}
          </CollectionTable>
        </TableWrapper>
        <ButtonWrapper>
          <Button color='orange' outline>See all</Button>
        </ButtonWrapper>
      </Content>
    </Container>
  )
}