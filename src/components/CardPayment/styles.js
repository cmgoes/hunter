import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 174px);

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > div {
      width: 50%;
    }
  }
`
