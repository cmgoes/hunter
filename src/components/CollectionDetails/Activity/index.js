import React from 'react'
import { InnerContainer } from '../../Layout'
import FaEthereum from '@meronex/icons/fa/FaEthereum'
import BsBoxArrowUpRight from '@meronex/icons/bs/BsBoxArrowUpRight'
import { SearchBar } from '../../Header/SearchBar'
import ReactApexChart from 'react-apexcharts'
import moment from 'moment'
import { useTheme } from 'styled-components'
import { Select } from '../../Shared'

import {
  ChartContainer,
  TableWrapper,
  ItemContainer,
  PriceContainer,
  UnerLineText,
  TimeContainer,
  SearchbarWrapper,
  ChartWrapper,
  ChartHeader,
  SortWrapper
} from './styles'

export const Activity = () => {
  const theme = useTheme()

  const activityData = [
    { id: 1, photo: '/images/collection-1.png' },
    { id: 2, photo: '/images/collection-2.png' },
    { id: 3, photo: '/images/collection-3.png' },
    { id: 4, photo: '/images/collection-4.png' },
    { id: 5, photo: '/images/collection-5.png' },
    { id: 6, photo: '/images/collection-6.png' },
    { id: 7, photo: '/images/collection-1.png' },
    { id: 8, photo: '/images/collection-3.png' },
    { id: 9, photo: '/images/collection-5.png' }
  ]

  const daysOptions = [
    { value: '1', content: '1 day' },
    { value: '7', content: '7 days' },
    { value: '30', content: '30 days' },
  ]

  const series = [{
    name: "Volume Traded",
    data: [38, 45, 13, 51, 49, 62, 69]
  }]

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
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
    grid: {
      show: false
    },
    xaxis: {
      categories: ["2021-11-12T00:00:00.000Z", "2021-11-13T01:30:00.000Z", "2021-11-14T02:30:00.000Z", "2021-11-15T03:30:00.000Z", "2021-11-16T01:30:00.000Z", "2021-11-17T02:30:00.000Z", "2021-11-18T03:30:00.000Z"],
      labels: {
        show: true,
        style: {
            colors: [`${theme.colors.gray}`],
            fontSize: '10px',
        },
        axisBorder: {
          show: true,
          color: theme.colors.gray,
          height: 1,
          width: '100%',
        },
        formatter: function(value, timestamp, opts) {
          return moment(value).format('MM/DD')
        }
      },
    },
    yaxis: {
      opposite: true,
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'right',
      fontSize: '16px',
      fontWeight: 500,
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0
      },
      itemMargin: {
        horizontal: 5,
        vertical: 15
      },
    },
    theme: {
      mode: 'dark',
      palette: 'palette1', 
    }
  }
  return (
    <>
      <InnerContainer>
        <SearchbarWrapper>
          <SearchBar
            placeholder='Search collections'
          />
        </SearchbarWrapper>
      </InnerContainer>
      <ChartContainer>
        <InnerContainer>
          <ChartHeader>
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
          </ChartHeader>
          <ChartWrapper>
            <ReactApexChart options={options} series={series} type="area" height={350} />
          </ChartWrapper>     
        </InnerContainer>
      </ChartContainer>
      <InnerContainer>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            {activityData.map(item => (
              <tbody key={item.id}>
                <tr>
                  <td>
                    <ItemContainer>
                      <img src={item.photo} alt='' />
                      <span>GE 7,564</span>
                    </ItemContainer>
                  </td>
                  <td>
                    <PriceContainer>
                      <div>
                        <FaEthereum />
                        <span>1.6</span>
                      </div>
                      <span>$6 892.59</span>
                    </PriceContainer>
                  </td>
                  <td>1</td>
                  <td>
                    <UnerLineText>witch...</UnerLineText>
                  </td>
                  <td>
                    <UnerLineText>Scrot...</UnerLineText>
                  </td>
                  <td>
                    <TimeContainer>
                      <span>an hour ago</span>
                      <BsBoxArrowUpRight />
                    </TimeContainer>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </TableWrapper>
      </InnerContainer>
    </>
  )
}
