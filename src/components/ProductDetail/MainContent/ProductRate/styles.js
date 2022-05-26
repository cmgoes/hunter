import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px 30px;
  > h1 {
    font-size: 24px;
    margin-top: 0px;
    text-align: center
  }

  @media (min-width: 768px) {
    padding: 15px 50px 30px 50px;
  }
`

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
    margin-right: 10px;

    &.fill {
      color: ${props => props.theme.colors.orange};
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 25px;

  button {
    width: 100%;
  }
`
