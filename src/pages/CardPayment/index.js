import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { CardPayment as CardPaymentController } from '../../components/CardPayment'

export const CardPayment = (props) => {
  return (
    <>
      <HelmetTags page='card_payment' />
      <CardPaymentController {...props} />
    </>
  )
}
