import styled, { css } from 'styled-components'

export const TopNftContainer = styled.div``

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 30px;
  overflow: hidden;
  height: 49px;
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100%;
    &:first-child {
      border-right: 1px solid ${props => props.theme.colors.borderColor};
      padding-left: 20px;
    }
    &:last-child {
      padding-right: 20px;
    }
  }
`

export const Toggle = styled.div`
  ${({ active }) => active && css`
    background: ${props => props.theme.colors.cardColor};
  `}
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

export const CollectionTable = styled.table`
  width: 100%;
  min-width: 870px;
  border-collapse: collapse;

  thead {
    background-color: black;
    tr th {
      padding: 20px 5px;
    }
  }

  tr th, tr td {
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
    text-align: left;
    padding: 10px 5px;

    @media (min-width: 993px) {
      font-size: 16px;
    }
  }

  tr td {
    color: ${props => props.theme.colors.headingColor};
    &.chart-item {
      width: 80px;
    }
  }
`

export const Tboday = styled.tbody`
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.cardColor};
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  .collection-id {
    color: ${props => props.theme.colors.gray};
    margin-right: 10px;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`

export const SortBlock = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${props => props.theme.colors.gray};
    margin-left: 5px;
    min-width: 24px;
  }
`

export const ChainWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
    margin-right: 10px;
  }
`