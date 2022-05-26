import styled from 'styled-components'

export const RecentlyViewedContainer = styled.div`
  margin-top: 30px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0px;
  }
  img {
    margin-left: 10px;
    width: 30px;
  }
`

export const CollectionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -10px;
  width: calc(100% + 20px);

  > div {
    width: calc(100% - 20px);
    margin: 10px;
  }

  @media (min-width: 576px) {
    > div {
      width: calc(50% - 20px);
    }
  }

  @media (min-width: 768px) {
    > div {
      width: calc(33.33% - 20px);
    }
  }

  @media (min-width: 993px) {
    > div {
      width: calc(25% - 20px);
    }
  }
`