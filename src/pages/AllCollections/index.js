import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AllCollections as AllCollectionsController } from '../../components/AllCollections'

export const AllCollections = (props) => {
  return (
    <>
      <HelmetTags page='collections' />
      <AllCollectionsController {...props} />
    </>
  )
}
