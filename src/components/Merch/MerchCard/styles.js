import styled from 'styled-components'

export const MerchCardContainer = styled.div`
  border-radius: 16px;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  overflow: hidden;

  &:hover {
    .card-content {
      opacity: 1;
    }
    .lock-icon {
      background: ${props => props.theme.colors.backgroundColor};
      > svg {
        color: white;
      }
    }
  }
`
export const MerchCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;

  > div {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;

    > svg {
      color: ${props => props.theme.colors.backgroundColor};
      font-size: 24px;
    }
  }
`
export const MerchCardContent = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  opacity: 0;
  transition: all 0.3s linear;

  > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      span {
        font-size: 24px;
        font-weight: 600;
      }
    }
    &:last-child {
      font-size: 16px;
    }
  }
`
