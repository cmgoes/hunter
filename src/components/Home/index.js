import React from 'react'
import { CollectionList } from './CollectionList'
import { HomeHero } from './HomeHero'
import { InfiniteMarquee } from './InfiniteMarquee'
import { TopCollections } from './TopCollections'
import { NewCollections } from './NewCollections'

export const Home = (props) => {

  return (
    <>
      <HomeHero />
      <InfiniteMarquee />
      <NewCollections />
      <TopCollections />
      <CollectionList />
    </>
  )
}
