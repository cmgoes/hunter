import styled from 'styled-components'

export const Container = styled.div`
`
export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 24px;
    font-weight: 600;
    margin-right: 10px;
  }
  img {
    width: 24px;
  }
  @media (min-width: 768px) {
    > span {
      font-size: 36px;
    }
    img {
      width: 36px;
    }
  }
  @media (min-width: 1024px) {
    > span {
      font-size: 42px;
    }
    img {
      width: 42px;
    }
  }
`
export const AnnounceContainer = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 150px;

  .title {
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 768px) {
    border-radius: 16px;
    .title {
      padding: 20px 20px 0 20px 0;
    }
  }
  @media (min-width: 1024px) {
    border-radius: 24px;
    .title {
      padding: 25px 30px 0 30px;
    }
  }

  .sale-card {
    border-radius: 0;
    margin-bottom: 0;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    &:last-child {
      border-bottom: none;
    }
  }
`
