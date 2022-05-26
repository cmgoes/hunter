import React, { useState } from 'react'
import { InnerContainer } from '../Layout'
import { Tab, Tabs } from '../Shared/Tabs'
import { Activity } from './Activity'
import { HeatMap } from './HeatMap'
import { MarketShare } from './MarketShare'
import { MarketShareHeader } from './MarketShare/MarketShareHeader'
import { PassiveIncome } from './PassiveIncome'
import {
  AnalyticsContainer,
  ContentWrapper
} from './styles'
import { TopNft } from './TopNft'

export const Analytics = () => {
  const [selectedMenu, setSelectedMenu] = useState('top_nft')
  const menuList = [
    { key: 'top_nft', title: 'Top NFTs' },
    { key: 'activity', title: 'Activity' },
    { key: 'passive_income', title: 'Passive income' },
    { key: 'heat_map', title: 'Heat map' },
    { key: 'market_share', title: 'Market share' },
  ]

  return (
    <AnalyticsContainer isGradient={selectedMenu === 'market_share'}>
      <InnerContainer>
        {selectedMenu === 'market_share' && <MarketShareHeader />}
        <Tabs>
          {menuList.map((menu, i) => (
            <Tab
              key={i}
              active={menu.key === selectedMenu}
              onClick={() => setSelectedMenu(menu.key)}
              borderBottom
            >{menu.title}</Tab>
          ))}
        </Tabs>
        <ContentWrapper>
          {selectedMenu === 'top_nft' && <TopNft />}
          {selectedMenu === 'activity' && <Activity />}
          {selectedMenu === 'passive_income' && <PassiveIncome />}
          {selectedMenu === 'heat_map' && <HeatMap />}
          {selectedMenu === 'market_share' && <MarketShare />}
        </ContentWrapper>
      </InnerContainer>
    </AnalyticsContainer>
  )
}
