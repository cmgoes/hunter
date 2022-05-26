import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  padding: 10px 0px;
  margin: 0px 15px;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    background: linear-gradient(90deg, #ffa633 0%, #ff5d2b 100%);
    bottom: -1px;
    left: 0px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.white};
    &::after {
      width: 100%;
    }
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.gray};
  `}
`