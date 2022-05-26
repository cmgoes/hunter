import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${props => props.theme.colors.cardColor};
  border-radius: 24px;
  margin: 20px 0px;
  padding: 15px 20px;

  @media (min-width: 576px) {
   flex-direction: row; 
  }

  @media (min-width: 768px) {
    padding: 25px 35px;
  }
`

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  > img {
    width: 100px;
    height: 100px;
    min-width: 100px;
    object-fit: cover;
    border-radius: 24px;
  }

  > div {
    margin-left: 0px;
    h1 {
      margin-top: 0px;
      margin-bottom: 10px;
      color: white;
      font-size: 24px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 14px;
      margin: 0px;
      color: ${props => props.theme.colors.gray};
    }
  }

  @media (min-width: 576px) {
   flex-direction: row;
   margin-bottom: 0px;

   > div {
      margin-left: 20px;
      h1 {
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 768px) {
    > img {
      width: 130px;
      height: 130px;
      min-width: 130px;
    }
  }
`

export const DetailWrapper = styled.div`
  > h1 {
    font-size: 24px;
    color: white;
    margin-top: 0px;
    margin-bottom: 5px;
    text-align: center;
  }
  h4 {
    font-size: 14px;
    margin: 0px;
    color: ${props => props.theme.colors.gray};
    text-align: center;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 0px;
    background: -webkit-linear-gradient(360deg, #ffa633 0%, #ff5d2b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`