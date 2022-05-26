import styled, { css } from 'styled-components'

export const AnalyticsContainer = styled.div`
  padding: 30px 0px;

  ${({ isGradient }) => isGradient && css`
    background: linear-gradient(130deg, #252614 0%, #111111 30%,  #111111 100%);
  `}
`

export const ContentWrapper = styled.div`
  padding: 45px 0px;
`
