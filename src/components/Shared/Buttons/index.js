
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const IconButton = styled.button`
  background-color: #202020;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    font-size: 17px;
    color: #F3F4FA;
  }

  &:hover {
    background-color: ${props => props.theme.colors?.blue};
  }

  &:active {
    background-color:  ${({ theme }) => darken(0.04, theme.colors?.blue)};
  }

  ${({ naked }) => naked && css`
    background-color: transparent;
    border-color: transparent;
    padding: 2px;
  `}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202020;
  color: #FFF;
  font-weight: 500;
  border: 1px solid #202020;
  border-radius: ${({ borderRadius }) => !borderRadius ? '30px' : borderRadius};
  line-height: 20px;
  padding: 10px 17px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${() => darken(0.04, '#202020')};
  }
  &:active {
    background: ${() => darken(0.07, '#202020')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ bgtransparent }) => bgtransparent && css`
    background: transparent !important;
    border: 1px solid ${props => props.theme.colors.buttonBorder};
  `}
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ color }) => color === 'orange' && css`
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, #ffa133 0%, #ff602b 100%);
    color: ${props => props.theme.colors.backgroundColor};
    border-color: transparent;
    &:hover {
      background: ${props => props.theme.colors.backgroundColor};
      color: #FFF;
      border-color: ${props => props.theme.colors.orange};
    }
    &:active {
      background: ${props => props.theme.colors.backgroundColor};
      color: #FFF;
      border-color: ${props => props.theme.colors.orange};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors.backgroundColor};
      color: #FFF;
      border-color: ${props => props.theme.colors.orange};
      &:hover {
        background: linear-gradient(90deg, #ffa133 0%, #ff602b 100%);
        color: ${props => props.theme.colors.backgroundColor};
        border-color: transparent;
      }
      &:active {
        background: linear-gradient(90deg, #ffa133 0%, #ff602b 100%);
        color: ${props => props.theme.colors.backgroundColor};
        border-color: transparent;
      }
    `}
  `}
`
