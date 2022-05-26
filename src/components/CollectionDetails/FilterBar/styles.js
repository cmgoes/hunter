import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FilterContainer = styled.div`
  width: 100%;

  
  @media (min-width: 768px) {
    width: 300px;
    margin-right: 50px;
    ${({ isCollapse }) => isCollapse && css`
      width: 50px;
    `}
  }
`
export const AccordionContent = styled.div`
  input {
    background: transparent;
    border-color: white;
    width: 100%;
    margin: 5px 0;
    color: ${props => props.theme.colors.gray};
    border: 1px solid white;
    border-radius: 30px;
    font-size: 14px;
    padding: 8px 16px;
    outline: none;
    &:focus {
      border-color: ${() => darken(0.07, '#FFF')};
    }
    &::placeholder,
    &::-webkit-input-placeholder {
      color: #939393;
    }
    &:-ms-input-placeholder {
      color: #939393;
    }
    &::-ms-reveal{
      display: none;
    }
  }
`
export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;

  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      font-weight: 600;
      margin-right: 10px;
    }
  }

  svg {
    font-size: 24px;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 20px 0;
  > button {
    flex: 1;
    &:last-child {
      margin-left: 10px;
    }
  }
`
export const ExpandButton = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  background: #202020;
  border-radius: 8px;
  width: 49px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
`
