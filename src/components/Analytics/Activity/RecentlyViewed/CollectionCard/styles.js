import styled from 'styled-components'

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