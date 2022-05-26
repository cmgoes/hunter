import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  padding: 20px 40px;
`

export const Title = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  > div {
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    > div {
      width: 46%;
    }
  }
`

export const FormControl = styled.div`
  p {
    font-size: 14px;
    color: white;
    margin-top: 0px;
    margin-bottom: 10px;
    span {
      color: #FF6332;
    }
  }
  input {
    width: 100%;
    height: 44px;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
`

export const TextAreaWrapper = styled.div`
  margin-top: 20px;
`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  button {
    width: 100%;
    background: transparent;
  }
`
