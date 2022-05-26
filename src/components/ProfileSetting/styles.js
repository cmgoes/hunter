import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;
  min-height: calc(100vh - 177px);
  @media (min-width: 768px) {
    padding: 30px;
  }
  @media (min-width: 1024px) {
    padding: 50px;
  }
`
export const InnerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  > div {
    &:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      img {
        width: 30px;
        margin-left: 10px;
      }
    }

    &:last-child {
      display: flex;
      align-items: center;
      svg {
        color: #d3d3d3;
        font-size: 24px;
        margin-right: 10px;
      }
    }
  }

  h1 {
    font-size: 28px;
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 32px;
    }
    > div {
      &:first-child {
        margin-bottom: 0px;

        img {
          width: 40px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 42px;
    }

    > div {
      &:first-child {
        img {
          width: 48px;
        }
      }
    }
  }
`
export const CardContainer = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 24px;
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`
export const UserBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin: 0 auto;
  }
  > div:last-child {
    margin-top: 20px;
    h2 {
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 5px;
      font-weight: 500;
    }
    h3 {
      font-size: 16px;
      margin: 15px 0;
      color: #d3d3d3;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > div:first-child {
      margin: 5px 0 0 0;
    }
    > div:last-child {
      margin-left: 40px;
      margin-top: 0px;

      h2 {
        font-size: 28px;
      }
      h3 {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1440px) {
    > div:last-child {
      h2 {
        font-size: 32px;
      }
      h3 {
        font-size: 24px;
      }
    }
  }
`
export const UserPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.orange};
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`
export const CameraWrapper = styled.div`
  position: absolute;
  border: 1px solid ${props => props.theme.colors.orange};
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0px;
  background: ${props => props.theme.colors.backgroundColor};
`
export const TokenWrapper = styled.div`
  color: ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: 300;
  }
  svg {
    margin-left: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > div {
      width: 48%;
    }
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    margin-bottom: 10px;
    span {
      color: #ff6332;
      margin-left: 5px;
    }
  }

  input {
    height: 44px;
  }
`
export const ButtonWrapper = styled.div`
  margin-top: 30px;
  button {
    height: 50px;
    width: 150px;
    background: transparent;
  }
`
