import React, { useState } from 'react'
import { InnerContainer } from '../Layout'
import { TopCollections } from './TopCollections'
import { Tabs, Tab } from '../Shared'
import { ViewCollection } from './ViewCollection'
import { ExploreTraits } from './ExploreTraits'
import { Activity } from './Activity'

import {
  Container,
  HeroContainer,
  HeroInnerContainer,
  HeroContent,
  HeroImageWrapper,
  TabContentWrapper
} from './styles'
import { MyWallet } from './MyWallet'

export const CollectionDetails = () => {
  const [showTab, setShowTab] = useState('view_collection')
  const tabOptions = [
    { key: 'view_collection', content: 'View collection' },
    { key: 'explore_traits', content: 'Explore traits' },
    { key: 'activity', content: 'Activity' },
    { key: 'my_wallet', content: 'My Wallet' }
  ]
  return (
    <Container>
      <HeroContainer>
        <InnerContainer>
          <HeroInnerContainer>
            <HeroContent>
              <div>
                <img src='/images/user-2.png' alt='' />
                <span>@loremipsum</span>
              </div>
              <h1>PET LIGER</h1>
              <p>
                Missed out on Chubbicorn? All good, you can adopt a Chubbinfren.
                This is an official Chubbiverse collection of 8888 cute NFTs.
              </p>
            </HeroContent>
            <HeroImageWrapper>
              <img src='/images/collection-detail-1.png' alt='' />
            </HeroImageWrapper>
          </HeroInnerContainer>
        </InnerContainer>
      </HeroContainer>

      <TabContentWrapper>
        <InnerContainer>
          <Tabs>
            {tabOptions.map(tab => (
              <Tab
                key={tab.key}
                active={tab.key === showTab}
                onClick={() => setShowTab(tab.key)}
              >{tab.content}</Tab>
            ))}
          </Tabs>
          {showTab === 'view_collection' && (
            <ViewCollection />
          )}
          {showTab === 'explore_traits' && (
            <ExploreTraits />
          )}
          {showTab === 'my_wallet' && (
            <MyWallet />
          )}
        </InnerContainer>
        {showTab === 'activity' && (
          <Activity />
        )}
      </TabContentWrapper>
      <TopCollections />
    </Container>
  )
}