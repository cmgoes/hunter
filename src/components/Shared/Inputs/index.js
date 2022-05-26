import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Input = styled.input`
  background: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.headingColor};
  border: 1px solid #707070;
  border-radius: 30px;
  font-size: 14px;
  padding: 8px 16px;
  outline: none;
  &:focus {
    border-color: ${() => darken(0.07, '#707070')};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &::-ms-reveal{
    display: none;
  }
`

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors.backgroundColor};;
  color: ${props => props.theme.colors.headingColor};
  border: 1px solid #707070;
  border-radius: 6px;
  font-size: 14px;
  padding: 7px 15px;
  outline: none;
  resize: none;
  &:focus {
    border-color: ${() => darken(0.07, '#707070')};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
`

