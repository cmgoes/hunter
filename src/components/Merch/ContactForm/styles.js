import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 15px;
  margin: 35px 0px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.cardColor};
  border-radius: 24px;
  position: relative;

  > div {
    width: 100%;
    padding: 15px 0px;
  }

  > img {
    position: absolute;
    &.image-small-1 {
      left: 60px;
      top: -25px;
      width: 60px;
    }
    &.image-small-2 {
      left: 160px;
      top: -15px;
      width: 30px;
    }
  }

  @media (min-width: 576px) {
    flex-direction: row;
    padding: 30px;
    > div {
      width: 50%;
      padding: 0px 15px;
    }
  }

  ${({ isGradient }) => isGradient && css`
    background: linear-gradient(336deg,#ff6b35 -70%,#202020 34%,#202020 100%);
  `}
`

export const DescriptionWrapper = styled.div`
  p {
    margin-top: 0px;
    margin: 20px 0px;
    font-size: 32px;
    > span {
      font-weight: bold;
    }
    img {
      width: 42px;
      height: 42px;
      margin-right: 15px;
    }
  }

  > span {
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    width: 120px;
  }
`
