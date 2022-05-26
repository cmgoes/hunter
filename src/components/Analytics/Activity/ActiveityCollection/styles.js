import styled from 'styled-components'

export const ActiveityCollectionContainer = styled.div`
  
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-bottom: 25px;
  }
`

export const SeachWrapper = styled.div``

export const SelectWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 30px;
  padding: 5px 0px;
`

export const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.cardColor};
  border-radius: 8px;
`

export const NoneFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 60px;

  span {
    color: ${props => props.theme.colors.gray};
  }
`