import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(130deg, #252614 0%, #111111 30%,  #111111 100%);
`
export const HeroContainer = styled.div`
  padding: 50px 0;

  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`
export const HeroInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #18190e;

  @media (min-width: 768px) {
    flex-direction: row;
    border-radius: 24px;
  }
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  > div {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 15px;
    }
    span {
      color: ${props => props.theme.colors.gray};
    }
  }

  > h1 {
    font-size: 42px;
    margin: 20px 0;
  }


  > p {
    max-width: 450px;
  }
  @media (min-width: 768px) {
    width: 45%;
    padding: 30px;

    > h1 {
      font-size: 52px;
    }
  }
  @media (min-width: 1024px) {
    padding: 50px;
    > h1 {
      font-size: 60px;
    }
  }
  @media (min-width: 1200px) {
    > h1 {
      font-size: 80px;
    }
  }
`
export const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  > img {
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    > img {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
    }
  }
`
export const TabContentWrapper = styled.div`
  padding: 50px 0;
`
