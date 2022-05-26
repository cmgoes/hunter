import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Merch as MerchController } from '../../components/Merch'

export const Merch = (props) => {
  return (
    <>
      <HelmetTags page='merch' />
      <MerchController {...props} />
    </>
  )
}
