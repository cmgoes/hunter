import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  
  @media (min-width: 768px) {
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`
export const ChildrenWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`