import React from 'react'
import { Select } from '../../../Shared'
import {
  Container,
  PureSetWrapper,
  SelectWrapper,
  ProductImageWrapper,
  PriceWrapper
} from './styles'

export const ProductItem = (props) => {
  const {
    product
  } = props

  const options = [
    { value: 1, content: 1 },
    { value: 2, content: 2 },
    { value: 3, content: 3 },
    { value: 4, content: 4 },
    { value: 5, content: 5 },
    { value: 6, content: 6 },
    { value: 7, content: 7 },
  ]

  return (
    <Container>
      <ProductImageWrapper>
        <img src={product.image} alt='' />
        <PureSetWrapper>
          <p>{product.name}</p>
          <div>
            <span>Qty</span>
            <SelectWrapper>
              <Select
                notReload
                options={options}
                defaultValue={product.qty}
                onChange={name => console.log(name)}
              />
            </SelectWrapper>
          </div>
        </PureSetWrapper>
      </ProductImageWrapper>
      <PriceWrapper>
        <h2>${product.price.toFixed(2)}</h2>
        {product.each && <p>${product.each.toFixed(2)} each</p>}
      </PriceWrapper>
    </Container>
  )
}
