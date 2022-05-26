import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;
  display:flex;
  justify-content: center;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    padding: 20px 30px;
    margin-bottom: 80px;
  }
  @media (min-width: 1024px) {
    padding: 20px 50px;
  }
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;

  h1 {
    font-size: 32px;
    margin: 0px;
  }

  img {
    margin-left: 10px;
    width: 30px;
  }

  @media (min-width: 576px) {
    margin-bottom: 0px;
    h1 {
      font-size: 30px;
    }
    img {
      margin-left: 10px;
      width: 40px;
    }
  }
`

export const SearchWrapper = styled.div`
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

export const CollectionTable = styled.table`
  width: 100%;
  min-width: 870px;
  border-collapse: collapse;

  tr th, tr td {
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
    text-align: left;
    padding: 10px 5px;

    @media (min-width: 993px) {
      font-size: 16px;
    }
  }

  tr td {
    color: ${props => props.theme.colors.headingColor};
    &:first-child {
      color: ${props => props.theme.colors.gray};
    }
    &.chart-item {
      width: 80px;
    }
  }
`

export const Tboday = styled.tbody`
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.cardColor};
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
`

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${props => props.theme.colors.gray};
    margin-left: 5px;
    min-width: 24px;
  }
`

export const ChartWrapper = styled.div`
  width: 100%;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  button {
    width: 100%;
  }
`
