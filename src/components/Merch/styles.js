import styled from 'styled-components'

export const Container = styled.div``

export const MerchandiseSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  margin-bottom: 50px;
  transition: all 0.3s;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const MerchListWrapper = styled.div`
  flex: 1;
`

export const MerchListHeader = styled.div`
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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;

  > h1 {
    margin: 0px;
    font-size: 35px;
    color: white;
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    min-width: 35px;
  }
`

export const MerchList = styled.div`
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
