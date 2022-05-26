import styled, { css } from 'styled-components'

export const IconButton = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  
  svg {
    font-size: 32px;
    color: ${props => props.theme.colors.gray};
  }

  &:after {
    content: "";
    background: ${props => props.theme.colors.orange};
    border-radius: 50%;
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -2px;
    right: -2px;
  }
`
export const CartsContainer = styled.div`
  position: fixed;
	top: 0px;
	right: 0px;
	z-index: 1100;
	width: 100vw;
	height: 100%;
	transition: all 0.5s ease 0s;
	overflow: auto;
  background: ${props => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 500px;
  }
`
export const OverLay = styled.div`
  position: fixed;
	z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
export const Header = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  display: flex;
  align-items: center;
  padding: 20px;

  span {
    margin: 0 auto;
  }
  svg {
    cursor: pointer;
    font-size: 24px;
  }
`
export const CartsList = styled.div`
  padding: 20px 0;
  max-height: calc(100vh - 150px);
  overflow: auto;
  flex: 1;
`
export const CartCard = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 16px;
  padding: 15px;
  display: flex;
  margin: 20px 0;
  position: relative;
`
export const ButtonWrapper = styled.div`
  padding-bottom: 30px;
  button {
    width: 100%;
    height: 44px;
  }
`
export const CartDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0;
    font-size: 14px;
  }
  p {
    flex: 1;
    font-size: 12px;
    color: ${props => props.theme.colors.gray};
    font-weight: 600;
    margin-top: 10px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      color: ${props => props.theme.colors.orange};
      font-weight: 600;
      font-size: 16px;
    }
  }
`
export const ImageWrapper = styled.div`
  height: 100px;
  width: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 50px;
  padding: 5px 10px;
  > span {
    color: white;
    &.count {
      min-width: 30px;
      text-align: center;
    }
  }
`
export const IConButtonWrapper = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    color: #d2d2d2;
  }
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    cursor: not-allowed;
    svg {
      color: ${props => props.theme.colors.gray};
    }
  `}
`
export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;

  svg {
    font-size: 24px;
    margin-right: 20px;
    color: ${props => props.theme.colors.gray};
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
export const ModalTitle = styled.h1`
  font-size: 24px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`
export const WalletsItemsWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 24px;
  overflow: hidden;

  > div:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`
export const WalletsContainer = styled.div`
  padding: 20px 40px;
`
export const CloseButton = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
  }
`
export const WalletProcessingContainer = styled.div`

`
export const WalletProcessHeader = styled.div`
  background: ${props => props.theme.colors.cardColor};
  padding: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
    font-size: 20px;
  }

  img {
    width: 30px;
    animation: rotate 1000ms linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`
export const ProcessCarts = styled.div`
  > div {
    background: ${props => props.theme.colors.backgroundColor};
    &:last-child {
      margin-bottom: 0;
    }
  }
`
export const ProcessContent = styled.div`
  background: ${props => props.theme.colors.backgroundColor};
  padding: 20px 10px;
`
export const ProcessNotification = styled.div`
  background: ${props => props.theme.colors.backgroundColor};
  padding: 30px 20px 20px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  h4 {
    font-size: 28px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
  div {
    > span {
      &:first-child {
        color: white;
        font-weight: 600;
        font-size: 16px;
      }
      &:last-child {
        color: ${props => props.theme.colors.orange};
        margin-left: 20px;
        font-size: 12px;
      }
    }
  }
`
export const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  > div {
    display: flex;
    align-items: center;

    svg {
      color: ${props => props.theme.colors.orange};
      font-size: 42px;
    }
    span {
      font-size: 42px;
      margin-left: 20px;
    }
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
    text-align: center;
    max-width: 350px;
  }
  button {
    height: 44px;
    margin-top: 20px;
  }
`
