import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 100vh;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const HeroContainer = (props) => {
  return (
    <HeroContainerStyled
       {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </HeroContainerStyled>
  )
}
