import styled from 'styled-components'

export const Container = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const WatichListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  > span {
    font-size: 14px;
    margin-right: 10px;
    white-space: nowrap;
  }
`

export const RightHeaderWrapper = styled.div``

export const TreeMapWrapper = styled.div`
  margin-top: 30px;
`

export const ChartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChartChangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  > div {
    display: flex;
    align-items: center;
    margin-right: 10px;

    > span {
      color: white;
      font-size: 12px;
      margin-left: 5px;
    }
    &.gainers {
      svg {
        color: ${props => props.theme.colors.orange};
      }
    }
    &.losers {
      svg {
        color: #6335c3;
      }
    }
  }
`
