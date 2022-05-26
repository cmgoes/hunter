import styled, { css } from 'styled-components'

export const UserPhotoWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.orange};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isBig }) => isBig && css`
    width: 60px;
    height: 60px;
  `}
`
export const PopoverBody = styled.div`
  background-color: ${props => props.theme.colors.cardColor};
  border-radius: 8px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  margin-top: 15px;
`
export const UserBalanceContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > div:first-child {
    margin-top: 5px;
  }
  > div:last-child {
    margin-left: 15px;

    h2 {
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 5px;
      line-height: 32px;
      font-weight: 400;
    }
    h3 {
      font-size: 16px;
      margin: 0;
      color: #d3d3d3;
      font-weight: 400;
      line-height: 18px;
    }
    span {
      color: ${props => props.theme.colors.gray};
      font-size: 12px;
    }
  }
`
export const PopMenuItemsContainer = styled.div`
  padding: 5px 20px;
  ${({ noBorder }) => !noBorder && css`
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  `}

`
export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 15px 0;
  color: #d3d3d3;

  span {
    margin-left: 10px;
  }
  svg {
    font-size: 24px;
  }
`
