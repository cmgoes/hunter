import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  padding: 30px 0px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 50px 0px;
    > div {
      width: 45%;
    }
  }
`

export const RatingWrapper = styled.div`
  > p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;

    span {
      color: ${props => props.theme.colors.gray};
      font-size: 14px;
    }
  }
`

export const RatingDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
    margin-right: 10px;

    &.fill {
      color: ${props => props.theme.colors.orange};
    }
  }
`

export const PercentBar = styled.div`
  height: 3px;
  flex: 1;
  background: ${props => props.theme.colors.gray};
  border-radius: 10px;
  overflow: hidden;
`

export const Percent = styled.div`
  background: linear-gradient(90deg, #ffa133 0%, #ff602b 100%);
  height: 3px;
  width: 0px;
`

export const FreeShippingWrapper = styled.div`
  > h2 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    color: ${props => props.theme.colors.gray};
    font-weight: bold;
  }
  span {
    color: ${props => props.theme.colors.orange};
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
`