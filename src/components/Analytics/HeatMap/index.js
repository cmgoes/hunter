import React, { useState } from 'react'
import { SearchBar } from '../../Header/SearchBar'
import ReactApexChart from 'react-apexcharts'
import BsArrowUp from '@meronex/icons/bs/BsArrowUp'
import BsArrowDown from '@meronex/icons/bs/BsArrowDown'

import { Switch } from '../../Shared'
import {
  Container,
  HeaderWrapper,
  LeftHeaderWrapper,
  WatichListWrapper,
  RightHeaderWrapper,
  TreeMapWrapper,
  ChartFooter,
  ChartChangeWrapper
} from './styles'
import { CustomCalendar } from './CustomCalendar'

export const HeatMap = () => {
  const [isWatchList, setIsWatchList] = useState(true)

  const series = [
    {
      data: [
        {
          x: 'XOM',
          y: 5
        },
        {
          x: 'GS',
          y: 0.4
        },
        {
          x: 'CVX',
          y: -1.4
        },
        {
          x: 'GE',
          y: 2.7
        },
        {
          x: 'CAT',
          y: -0.3
        },
        {
          x: 'RTX',
          y: 5.1
        },
        {
          x: 'CSCO',
          y: -2.3
        },
        {
          x: 'JNJ',
          y: 2.1
        },
        {
          x: 'PG',
          y: 0.3
        },
        {
          x: 'TRV',
          y: 0.12
        },
        {
          x: 'MMM',
          y: -2.31
        },
        {
          x: 'NKE',
          y: 3.98
        },
        {
          x: 'IYT',
          y: 1.67
        }
      ]
    }
  ]

  const options = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap',
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      offsetY: -4
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#6335c3'
            },
            {
              from: 0.001,
              to: 6,
              color: '#e57443'
            }
          ]
        }
      }
    },
    theme: {
      mode: 'dark', 
    }
  }
  return (
    <Container>
      <HeaderWrapper>
        <LeftHeaderWrapper>
          <SearchBar
            placeholder='Locate'
            onChange={(val) => console.log(val)}
          />
          <WatichListWrapper>
            <span>My Watch List</span>
            <Switch
              defaultChecked={isWatchList}
              onChange={val => setIsWatchList(val)}
            />
          </WatichListWrapper>
        </LeftHeaderWrapper>
        <RightHeaderWrapper>
          <CustomCalendar />
        </RightHeaderWrapper>
      </HeaderWrapper>
      <TreeMapWrapper>
        <ReactApexChart options={options} series={series} type="treemap" height={350} />
        <ChartFooter>
          <ChartChangeWrapper>
            <div className='gainers'>
              <BsArrowUp />
              <span>27Gainers</span>
            </div>
            <div className='losers'>
              <BsArrowDown />
              <span>71Losers</span>
            </div>
          </ChartChangeWrapper>
        </ChartFooter>
      </TreeMapWrapper>
    </Container>
  )
}
