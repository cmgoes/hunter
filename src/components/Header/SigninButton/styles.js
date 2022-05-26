import styled from 'styled-components'

export const SigninBtn = styled.span`
  cursor: pointer;
  font-size: 14px;
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`
export const WalletsContainer = styled.div`
  padding: 20px 40px;
`
export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`
export const WalletsItemsWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 24px;
  overflow: hidden;

  > div:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`
export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 20px;
  }

  > p {
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.colors.gray};
  }

  &:hover {
    background: ${props => props.theme.colors.backgroundActive};
  }
`
