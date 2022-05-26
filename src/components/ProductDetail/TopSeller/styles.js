import styled from 'styled-components'

export const Container = styled.div``

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h1 {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 15px;
  }
`

export const SwiperWrapper = styled.div``

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