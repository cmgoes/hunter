import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.cardColor};
  padding: 0 15px;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`
export const InnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const CopyWriteContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 130px;
    position: absolute;
    top: -60px;
  }

  p {
    color: ${props => props.theme.colors.gray};
    font-size: 16px;
    margin-top: 60px;
    margin-bottom: 15px;
  }


  @media (min-width: 768px) {
    justify-content: initial;

    p {
      margin-left: 150px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`
export const SocialLink = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 5px;
  svg {
    font-size: 32px;
    color: ${props => props.theme.colors.gray};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.orange};
    }
  }
`
