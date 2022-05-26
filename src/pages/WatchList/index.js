import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { WatchList as WatchListController } from '../../components/WatchList'

export const WatchList = (props) => {
  return (
    <>
      <HelmetTags page='watchList' />
      <WatchListController {...props} />
    </>
  )
}
