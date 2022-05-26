import React from 'react'
import { useParams } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { CollectionDetails as CollectionDetailsController } from '../../components/CollectionDetails'

export const CollectionDetails = (props) => {
  const { id } = useParams()
  const detailsProps = {
    ...props,
    id
  }
  return (
    <>
      <HelmetTags page='collectionDetails' />
      <CollectionDetailsController {...detailsProps} />
    </>
  )
}
