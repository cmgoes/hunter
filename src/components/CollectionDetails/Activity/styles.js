import styled from 'styled-components'

export const ChartContainer = styled.div`
  background: #151515;
  padding: 50px 0;
`
export const TableWrapper = styled.div`
  overflow: auto;
  margin-top: 80px;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 760px;
    thead {
      tr {
        th {
          text-align: left;
          padding: 15px 0;
          &:last-child {
            width: 150px;
          }
        }
      }
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    }
    tbody {
      tr {
        td {
          padding: 12px 0;
        }
      }
    }
  }
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
  }
  span {
    font-weight: 600;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    span {
      font-weight: 600;
    }
  }
  > span {
    color: ${props => props.theme.colors.gray};
    font-size: 12px;
  }
`
export const UnerLineText = styled.div`
  text-decoration: underline;
`
export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    text-decoration: underline;
    margin-right: 5px;
  }
`
export const SearchbarWrapper = styled.div`
  margin: 80px 0 50px 0;
  input {
    height: 49px;
    width: fit-content;
    min-width: 350px;
    background: transparent;
    &:focus {
      border-color: white;
    }
  }
`

export const ChartWrapper = styled.div``

export const ChartHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 30px;
  padding: 10px 15px 10px 20px;

  span {
    font-size: 14px;
  }

  #select-input {
    color: ${props => props.theme.colors.orange};
    background: transparent;
    > div:first-child {
      padding: 5px;
      div {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .item {
      padding: 10px 15px;
    }
    #list {
      > div {
        white-space: nowrap;
      }
    }
  }
`
