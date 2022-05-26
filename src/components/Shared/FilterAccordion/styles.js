import React from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AccordionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.6s ease;
  padding: 15px 0;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    font-size: 20px;
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
