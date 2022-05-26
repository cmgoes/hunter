import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 15px;
  background-color: #1c254f;
  display: flex;
  justify-content: flex-end;
  
  @media (min-width: 768px) {
    padding: 40px 20px 40px 30px;
  }

  @media (min-width: 1024px) {
    padding: 50px 20px 50px 50px;
  }
`

export const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 30px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > svg {
    font-size: 24px;
    margin-right: 10px;
  }

  > span {
    margin: 0px 10px;
  }
`

export const PaymentRound = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: white;
  color: ${props => props.theme.colors.backgroundColor};
`

export const TestModeWrapper = styled.div`
  background: #fadf9c;
  padding: 5px;
  border-radius: 8px;
  span {
    color: #ae5b22;
  }
`

export const PriceWrapper = styled.div`
  margin-bottom: 30px;
  padding-left: 20px;
  p {
    font-size: 16px;
    margin: 0px;
    color: #bcbcbc; 
  }
  h1 {
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 300px;

  > span {
    font-size: 14px;
    color: #bcbcbc;
    padding: 0 20px;
    &:first-child {
      border-right: 1px solid #bcbcbc;
    }

    span {
      font-weight: bold;
    }
  }
`

export const ProductListWrapper = styled.div`
  padding-left: 20px;
`