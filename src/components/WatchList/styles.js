import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0;
`
export const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 32px;
    margin: 0;
  }

  img {
    margin-left: 20px;
    width: 18px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 36px;
    }
    img {
      width: 20px;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      font-size: 44px;
    }
    img {
      width: 25px;
    }
  }
`
