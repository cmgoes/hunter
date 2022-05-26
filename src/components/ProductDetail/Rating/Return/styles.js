import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
  h1 {
    font-size: 26px;
  }

  > p {
    font-size: 14px;
    color: #bcbcbc;
    span {
      color: ${props => props.theme.colors.orange};
      font-weight: bold;
    }
    &.disabled {
      color: ${props => props.theme.colors.gray};
    }
    &.small {
      font-size: 13px;
      text-decoration: underline;
    }
  }
`
