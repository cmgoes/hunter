import styled, { css } from 'styled-components'

export const ToggleSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
  margin-bottom: 0px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 30px;

  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    pointer-events: none;
  `}

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: transparent;
    }
    &:focus + span {
      box-shadow: 0 0 1px transparent;
    }
    &:checked + span:before {
      -webkit-transform: translateX(18px);
      -ms-transform: translateX(18px);
      transform: translateX(18px);
    }
  }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.gray};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 1px;
    bottom: 1px;
    background-color: ${props => props.theme.colors.orange};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`
