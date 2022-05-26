import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`
export const PageNumberInfo = styled.div`
  color: ${props => props.theme.colors.gray};
  margin-right: 20px;
`
export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PageButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  outline: none;
  border: none;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;

  ${props => props.theme?.rtl ? css`
    margin-left: 3px;
  ` : css`
    margin-right: 3px;
  `}

  &:hover {
    background-color: #1507260a;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    background-color: #1507261a;
  }

  ${({ active }) => active && css`
    color: white;
    border: 1px solid ${props => props.theme.colors.orange};
  `}

  ${({ noEffect }) => noEffect && css`
    cursor: initial;
    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  `}
`
