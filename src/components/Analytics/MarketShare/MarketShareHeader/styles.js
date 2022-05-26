import styled from 'styled-components'

export const Container = styled.div`
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  margin: 30px 0px;
  padding: 30px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #000000b3;
  border-radius: 24px;

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
    font-size: 25px;
    margin: 10px 0;
  }


  > p {
    max-width: 450px;
    font-size: 14px;
    margin: 0px;
    color: #b7b7b7;
  }
  @media (min-width: 768px) {
    padding: 20px;

    > h1 {
      font-size: 25px;
    }
  }
  @media (min-width: 1200px) {
    > h1 {
      font-size: 35px;
    }
  }
`
