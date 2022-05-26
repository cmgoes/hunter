import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  margin-bottom: 50px;
  transition: all 0.3s;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const Content = styled.div`
  flex: 1;
  overflow: auto;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  > div:last-child {
    display: flex;
    align-items: center;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
  input {
    height: 49px;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`
export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 30px;
  padding: 10px 15px 10px 20px;
  margin-right: 20px;

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
export const TabOptonsContainer = styled.div`
  background: #202020;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const FilterTab = styled.div`
  margin: 0px 15px;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    background: linear-gradient(90deg, #ffa633 0%, #ff5d2b 100%);
    bottom: -10px;
    left: 0px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.white};
    &::after {
      width: 100%;
    }
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.gray};
  `}
`
export const TableWrapper = styled.div`
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 1000px;

    thead {
      tr {
        th {
          padding: 20px;
          font-weight: 300;
          text-align: left;
          white-space: nowrap;
        }
      }
    }
    tbody {
      &.border {
        height: 10px;
      }
      border-bottom: 5px solid transparent;
      td {
        background: #202020;
        text-align: left;
        white-space: nowrap;
        padding: 10px 20px;
      }
    }
  }
`
export const Examples = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    object-fit: cover;
  }
`
