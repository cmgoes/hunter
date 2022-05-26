import styled from 'styled-components'

export const Container = styled.div`
  .swiper-slide {
    height: auto;
    padding: 0 15px;
    background: linear-gradient(90deg, #111111 0%, #12161a 100%); 
  }

  @media (min-width: 768px) {
    .swiper-slide {
      padding: 0 30px;
    }
  }
  @media (min-width: 1024px) {
    .swiper-slide {
      padding: 0 50px;
    }
  }
`
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const LeftSlider = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > p {
    margin: 0 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 20px 0;
    img {
      width: 90%;
      &.margin {
        margin-left: 20px;
      }
    }
    p {
      margin-top: 50px;
      margin-bottom: 50px;
      margin-left: 20px;
      max-width: 450px;
    }
  }

  @media (min-width: 768px) {
    > p {
      margin: 0 33px;
    }
    > div {
      img {
        &.margin {
          margin-left: 33px;
        }
      }
      p {
        margin-left: 33px;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }

  @media (min-width: 1024px) {
    > p {
      margin: 0 50px;
    }
    > div {
      img {
        &.margin {
          margin-left: 50px;
        }
      }
      p {
        margin-left: 53px;
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }
  }
`
export const RightSlider = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  margin: 0 20px;
  > button {
    height: 50px;
    flex: 1;
    &:not(:first-child) {
      margin-left: 20px;
    }
  }

  @media (min-width: 768px) {
    margin: 0 33px;
  }

  @media (min-width: 1024px) {
    margin: 0 50px;
  }
`
export const ArrowButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  z-index: 10;
  width: 100%;
`
export const ArrowButtonInnerContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;

  display: flex;
  align-items: center;
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

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`
