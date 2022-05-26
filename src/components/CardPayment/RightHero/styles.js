import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 30px 15px;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  
  @media (min-width: 768px) {
    padding: 40px 30px 40px 20px;
  }

  @media (min-width: 1024px) {
    padding: 50px 50px 50px 20px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 30px;
  }
`

export const AppButtonWrapper = styled.div`
  button {
    width: 100%;
    border-radius: 8px;
    font-size: 18px;
    svg {
      font-size: 24px;
      margin-right: 10px;
    }
  }
`

export const WidthCard = styled.div`
  border-bottom: 1px solid #bcbcbc;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0px;

  span {
    position: absolute;
    top: 50px;
    color: #bcbcbc;
    top: -13px;
    background: white;
    padding: 0px 15px;
  }
`

export const InputWRapper = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 14px;
    margin-bottom: 5px;
    color: #5e5e5e;
  }
  input {
    width: 100%;
    height: 44px;
    border: 1px solid #bcbcbc;
    border-radius: 8px;
    color: black;
    padding: 15px;
    outline: none;
  }
`

export const CardInfoWrapper = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 14px;
    margin-bottom: 5px;
    color: #5e5e5e;
  }
  > div {
    border: 1px solid #bcbcbc;
    border-radius: 8px;
    overflow: hidden;
  }
`

export const CardDateWrapper = styled.div`
  display: flex;
  > div {
    position: relative;
    padding-right: 30px;
    &:first-child {
      border-right: 1px solid #bcbcbc;
      padding-right: 0px;
    }
    width: 50%;
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 15px;
      height: 44px;
      padding: 15px;
    }
    svg {
      position: absolute;
      z-index: 1;
      right: 10px;
      top: 10px;
      font-size: 24px;
      color: #bcbcbc;
    }
  }
`

export const CardNumberWrapper = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #bcbcbc;
  input {
    flex: 1;
    border: none;
    outline: none;
    height: 44px;
    padding: 15px;
  }
  > div {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      min-width: 30px;
      height: 20px;
      margin: 0px 5px;
    }
  }
`

export const PayButtonWrapper = styled.div`
  button {
    width: 100%;
    border-radius: 8px;
    font-size: 18px;
    background: #1c254f;
    position: relative;
    padding: 10px 17px;
    svg {
      position: absolute;
      font-size: 24px;
      right: 20px;
    }
  }

  ${({ processing }) => processing && css`
    button {
      svg {
        animation: rotate 1000ms linear infinite;
      }
    }
  `}
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`



export const ModalContent = styled.div`
  padding: 30px;
  background: white;
  > svg  {
    color: green;
    font-size: 32px;
  }
  h4 {
    color: black;
    font-size: 20px;
  }
  p {
    color: black;
    font-size: 14px;
  }
  > div {
    display: flex;
    align-items: center;
    button {
      background: #5868cd;
      color: white;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      svg {
        margin-left: 5px;
      }
    }
    a {
      color: black;
      margin-left: 20px;
      font-size: 14px;
      display: flex;
      align-items: center;
      svg {
        margin-left: 10px;
      }
    }
  }
`
export const CountryWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  label {
    margin-bottom: 5px;
    color: #5e5e5e;
    font-size: 14px;
  }

  > div {
    border: 1px solid #bcbcbc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    input {
      border: none;
      outline: none;
      margin: 5px 20px;
    }

    #select-input {
      background: transparent;
      border-bottom: 1px solid #bcbcbc;
      border-radius: unset;
      
      > div:first-child {
        padding: 9px 20px;
        color: black;
      }

      #list {
        border-radius: 5px;
        background: white;
        border: 1px solid #bcbcbc;
        .item {
          background: white !important;
          color: black;
          &:hover {
            background: #bcbcbc !important;
          }
        }
      }
    }
  }
`
