import React from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background: ${props => props.theme.colors.cardColor};
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 20px;
    border-radius: 16px;
  }
  @media (min-width: 1024px) {
    padding: 30px 40px;
    border-radius: 24px;
  }
`

const AccordionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.6s ease;
  padding: 15px 0;
  
  .rotate {
    transform: rotate(180deg);
  }
  
  .accordion__icon {
    font-size: 32px;
    cursor: pointer;
    margin-left: auto;
    transition: transform 0.6s ease;
  }
`

export const AccordionHeader = (props) => {
  const style = {}
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 15px;

  span {
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 24px;
    }
  }
`
export const ContentItem = styled.div`
  color: ${props => props.theme.colors.gray};
  padding-bottom: 20px;
  span {
    color: ${props => props.theme.colors.headingColor};
  }
`
export const ContentContainer = styled.div`
  min-height: 200px;
  @media (min-width: 768px) {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    > div {
      width: 47%;
    }
  }
`
