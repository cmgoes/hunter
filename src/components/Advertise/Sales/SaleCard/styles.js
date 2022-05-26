import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
    border-radius: 16px;
  }
  @media (min-width: 1024px) {
    border-radius: 24px;
    padding: 25px 30px;
  }
`
export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    min-height: 300px;
    width: 45%;
  }
  @media (min-width: 992px) {
    margin-right: 20px;
    min-height: 300px;
  }

  @media (min-width: 1200px) {
    margin-right: 50px;
  }
`
export const SaleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 20px;
  }
`
export const GeneralInfo = styled.div`
  p {
    color: #c7c7c7;
    font-weight: 600;
    margin: 10px 0;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`
export const NameWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    &:first-child {
      font-size: 24px;
      font-weight: 600;
      margin-right: 20px;
    }
    &:last-child {
      color: ${props => props.theme.colors.orange};
      font-weight: 600;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    > span {
      &:first-child {
        font-size: 32px;
      }
      &:last-child {
        font-size: 18px;
      }
    }
  }
`
export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const SocialLink = styled.a`
  padding: 5px 0;
  margin-right: 20px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray};
  svg {
    font-size: 24px;
    margin-right: 8px;
  }
`
export const SaleDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    > div:first-child {
      margin-right: 20px;
    }
  }
  @media (min-width: 1024px) {
    > div:first-child {
      margin-right: 50px;
    }
  }
`
export const SaleDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  .currency {
    color: ${props => props.theme.colors.green};
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`
