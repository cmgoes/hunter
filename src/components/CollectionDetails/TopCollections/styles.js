import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  > div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 32px;
    margin: 0;
  }

  #select-input {
    color: ${props => props.theme.colors.orange};
    > div:first-child {
      div {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .item {
      padding: 10px 15px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    #select-input {
      margin-right: 20px;
      margin-top: 0px;
    }
  }
`
export const ArrowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  justify-content: flex-end;

  .slidePrev-btn {
    margin-right: 15px;
  }

  .slidePrev-btn,
  .slideNext-btn {
    cursor: pointer;
    border: 1px solid #FFF;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #FFF;
      font-size: 24px;
    }
  }
  .swiper-button-disabled {
    opacity: 0.5;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  > span {
    color: ${props => props.theme.colors.gray};
    font-size: 18px;
    font-weight: 600;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 20px;
  }
`
export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-size: 18px;
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: center;
    > span {
      &:first-child {
        color: ${props => props.theme.colors.gray};
      }
      &:last-child {
        margin-left: 30px;
        color: ${props => props.theme.colors.green};
        &.warning {
          color: ${props => props.theme.colors.warning};
        }
      }
    }
  }
`
