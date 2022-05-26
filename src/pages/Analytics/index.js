import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Analytics as AnalyticsController } from '../../components/Analytics'

export const Analytics = (props) => {
  return (
    <>
      <HelmetTags page='analytics' />
      <AnalyticsController {...props} />
    </>
  )
}
