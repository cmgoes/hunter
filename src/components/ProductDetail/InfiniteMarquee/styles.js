import styled from 'styled-components'

export const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 60px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.cardColor};
  border-top: 1px solid ${props => props.theme.colors.gray};
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 50s linear infinite;

    .content {
      div {
        display: inline-flex;
        align-items: center;

        span {
          color: ${props => props.theme.colors.gray};
        }
        img {
          margin: 0 15px;
        }
      }
    }
  }

  @keyframes marquee {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  @media (min-width: 1440px) {
    height: 80px;
  }
`
