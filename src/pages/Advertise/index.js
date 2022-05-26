import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Advertise as AdvertiseController } from '../../components/Advertise'

export const Advertise = (props) => {
  return (
    <>
      <HelmetTags page='advertise' />
      <AdvertiseController {...props} />
    </>
  )
}
