import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;

  img {
    width: 60px;
    height: 60px;
    min-width: 60px;
    margin-right: 10px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const PureSetWrapper = styled.div`
  p {
    font-size: 16px;
    margin: 0px;
  }

  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: #bcbcbc;
    }
  }
`

export const SelectWrapper = styled.div`
  #select-input {
    background-color: transparent;
    border: none;
    > div:first-child {
      padding: 5px 10px;
      > div:first-child {
        color: white;
      }
    }
  }
`

export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const PriceWrapper = styled.div`
  h2 {
    font-size: 16px;
    margin: 0px;
    text-align: right;
  }
  p {
    margin: 0px;
    color: #bcbcbc;
    text-align: right;
  }
`
