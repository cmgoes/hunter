import styled from 'styled-components'

export const Container = styled.div`
  padding: 23px 30px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  span {
    margin: 0px;
    font-size: 24px;
    line-height: 21px;
    margin: 0px 10px;
  }

  > div {
    margin: 0px 5px;
    &.small {
      width: 2px;
      min-width: 2px;
      height: 10px;
      background: ${props => props.theme.colors.orange};
    }
    &.big {
      width: 2px;
      min-width: 2px;
      height: 15px;
      background: ${props => props.theme.colors.orange};
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 30px;
`

export const SizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 16px;
    margin-bottom: 10px;
    &.title {
      color: ${props => props.theme.colors.gray};
      margin-bottom: 20px;
    }
  }
`

export const ChestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 16px;
    color: #bcbcbc;
    margin-bottom: 10px;
    &.title {
      color: ${props => props.theme.colors.gray};
      margin-bottom: 20px;
    }
  }
`