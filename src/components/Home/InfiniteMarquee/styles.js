import styled from 'styled-components'

export const MarqueeContainer = styled.div`
  margin: 20px 0;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 60px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #ffa133 0%, #ff602b 100%);

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
          color: #111;
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
