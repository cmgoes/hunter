import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  margin-bottom: 50px;
  transition: all 0.3s;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const CollectionsList = styled.div`
  flex: 1;
`
export const CollectionsHeader = styled.div`
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
export const CollectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 30px);
  margin-left: -15px;
  > div {
    margin: 10px 15px;
    width: 100%;
  }

  @media (min-width: 993px) {
    > div {
      width: calc(50% - 30px);
    }
  }
  
  @media (min-width: 1200px) {
    > div {
      width: calc(33.33% - 30px);
    }
  }
`
export const CollectionCard = styled.div`
  border-radius: 16px;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  overflow: hidden;
`
export const CollectionCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  > span {
    color: #151515;
    font-size: 20px;
    font-weight: 600;
  }
  > div {
    > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid white;
      &:first-child {
        transform: translateX(20px);
      }
    }
  }
`
export const CollectionCardContent = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;

  > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      span {
        font-size: 24px;
        font-weight: 600;
      }
      svg {
        font-size: 20px;
      }
    }
    &:last-child {
      font-size: 16px;
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
