import styled from 'styled-components'

export const Container = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  > div {
    display: flex;
    align-items: center;
    > h1 {
      margin: 0px;
      margin-right: 20px;
      white-space: nowrap;
    }
  }
`

export const ContentWrapper = styled.div`
  border-radius: 24px;
  padding: 30px 20px;
  background: ${props => props.theme.colors.cardColor};
  display: flex;
  justify-content: center;
`

export const ChartWrapper = styled.div`
  min-width: 250px;

  @media (min-width: 576px) {
    min-width: 500px;
  }
`
