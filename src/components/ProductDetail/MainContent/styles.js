import styled, { css } from 'styled-components'

export const ContainerWrapper = styled.div`
  background: #262626;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    > div {
      width: 50%;
    }
  }
`

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 900px;
  > div {
    width: 100%;
  }

  .product-thumb {
    width: 100%;
    height: auto;

    .swiper-slide {
      padding: 10px 0px;
      opacity: 0.6;
      &.swiper-slide-thumb-active {
        opacity: 1;
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }

  .mySwiper2 {
    width: 100%;
    height: 100%;
    .swiper-slide-active {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 769px) {
    height: 750px;
    flex-direction: row;
    > div {
      width: 50%;
    }
    .mySwiper2 {
      flex: 1;
    }
    .product-thumb {
      width: 100px;

      .swiper-slide {
        min-height: 100px;
        padding: 0px 20px 0px 0px;
      }
    }
  }
`

export const DetailWrapper = styled.div`
  padding: 15px 20px;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }
`

export const StarWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    color: ${props => props.theme.colors.gray};
    font-size: 16px;
    white-space: nowrap;
    text-decoration: underline;
    margin-left: 10px;
    cursor: pointer;
    user-select: none;
  }
`

export const MarkWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
    margin-right: 5px;

    &.fill {
      color: ${props => props.theme.colors.orange};
    }
  }
`

export const Title = styled.h1`
  font-size: 32px;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 18px;

  span {
    text-decoration: underline;
    color: ${props => props.theme.colors.orange};
  }
`

export const FlavorWrapper = styled.div`
  p {
    font-size: 20px;
    font-weight: bold;
  }
  > div {
    display: flex;
    align-items: center;
  }
`

export const RoundBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  margin-right: 10px;
`

export const SizeWrapper = styled.div`
  p {
    font-size: 20px;
    font-weight: bold;

    span {
      font-size: 14px;
      cursor: pointer;
      text-decoration: underline;
      color: ${props => props.theme.colors.gray};
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const SizeBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  span {
    color: white;
    font-size: 14px;
  }

  > svg {
    font-size: 24px;
    margin-right: 10px;
    path {
      stroke: ${props => props.theme.colors.orange};
    }
  }

  ${({ noSvg }) => noSvg && css`
    width: 40px;
    min-width: 40px;
    border-radius: 50%;
  `}

  ${({ isDisabled }) => isDisabled && css`
    background: #2e2e2e;
    color: ${props => props.theme.colors.gray};
    border: none;
  `}

  ${({ active }) => active && css`
    background: black;
    border: none;
  `}
`

export const FeatureWrapper = styled.div`
  > h2 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
`

export const SeeMoreWrapper = styled.div`
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  
  > button {
    width: 100%;
  }
`

export const ScoreWrapper = styled.div`
  padding: 15px 30px;

  p {
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme.colors.gray};
  }

  @media (min-width: 768px) {
    padding: 15px 50px 30px 50px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  > h1 {
    font-size: 24px;
    margin: 0px;
    margin-right: 10px;
  }

  img {
    width: 35px;
  }
`