import React from 'react'
import { ActiveityCollection } from './ActiveityCollection'
import { RecentlyViewed } from './RecentlyViewed'
import {
  ActivityContainer
} from './styles'

export const Activity = () => {
  return (
    <ActivityContainer>
      <ActiveityCollection />
      <RecentlyViewed />
    </ActivityContainer>
  )
}
