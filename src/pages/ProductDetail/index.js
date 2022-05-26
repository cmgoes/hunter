import React from 'react'
import { useParams } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { ProductDetail as ProductDetailController } from '../../components/ProductDetail'

export const ProductDetail = (props) => {
  const { id } = useParams()
  const productDetailProps = {
    ...props,
    id
  }
  return (
    <>
      <HelmetTags page='product_detail' />
      <ProductDetailController {...productDetailProps} />
    </>
  )
}
