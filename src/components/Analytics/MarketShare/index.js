import React from 'react'
import { SearchBar } from '../../Header/SearchBar'
import ReactApexChart from 'react-apexcharts'
import {
  Container,
  HeaderWrapper,
  ContentWrapper,
  ChartWrapper
} from './styles'

export const MarketShare = () => {
  const series = [110, 34, 41, 17, 15, 18]
  const options = {
    chart: {
      type: 'donut',
      // width: 350,
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ef722c', '#544379', '#bfa1ff', '#6e49bc', '#403260', '#8c5feb'],
    legend: {
      position: 'left',
      offsetY: 0,
      height: 230,
    },
    theme: {
      mode: 'dark', 
    }
  }

  return (
    <Container>
      <HeaderWrapper>
        <div>
          <h1>NFT Value Share</h1>
          <SearchBar
            placeholder='Search collections'
            onChange={(val) => console.log(val)}
          />
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        <ChartWrapper>
          <ReactApexChart options={options} series={series} type="donut" />
        </ChartWrapper>
      </ContentWrapper>
    </Container>
  )
}
