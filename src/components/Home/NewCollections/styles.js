import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  margin: 50px 0;
  
  @media (min-width: 768px) {
    padding: 0 30px;
    margin: 50px 0;
  }

  @media (min-width: 1024px) {
    margin: 100px 0;
    padding: 0 50px;
  }
`
export const InnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  > div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 32px;
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  button {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;

    button {
      margin-top: 0;
    }
  }
`
export const CardContainer = styled.div`
  border-radius: 20px;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 350px;
  display: flex;
  align-items: flex-end;
  border-radius: 30px;
`
export const CardContent = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  > p {
    margin: 0;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 5px;
    img {
      margin-right: 10px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }
    span {
      font-size: 12px;
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