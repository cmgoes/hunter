import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`
export const InnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h1 {
    font-size: 32px;
    margin: 0;
  }

  #select-input {
    margin-top: 20px;
    color: ${props => props.theme.colors.orange};
    > div:first-child {
      div {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .item {
      padding: 10px 15px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    #select-input {
      margin-left: 20px;
      margin-top: 0px;
    }
  }
`
export const CollectionsCard = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 16px;
  padding: 30px 20px;

  display: flex;
  flex-wrap: wrap;
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${props => props.theme.colors.gray};
    font-size: 18px;
    font-weight: 600;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 20px;
  }

  margin: 15px 0;

  @media (min-width: 768px) {
    width: calc(50% - 30px);
    margin: 25px 15px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  @media (min-width: 1200px) {
    width: calc(33.33% - 50px);
    margin: 25px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`
export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-size: 18px;
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: center;
    > span {
      &:first-child {
        color: ${props => props.theme.colors.gray};
      }
      &:last-child {
        margin-left: 30px;
        color: ${props => props.theme.colors.green};
        &.warning {
          color: ${props => props.theme.colors.warning};
        }
      }
    }
  }
`