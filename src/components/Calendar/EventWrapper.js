import React from 'react'

import {
  EventWrapperContainer
} from './styles'

export const EventWrapper = (props) => {
  const {
    event
  } = props
  return (
    <EventWrapperContainer
      preSale={event.type === 'Presale'}
    >
      {props.children}
    </EventWrapperContainer>
  )
}
