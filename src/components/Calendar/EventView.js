import React from 'react'

import {
  EventViewContainer,
} from './styles'

export const EventView = (props) => {
  const {
    event
  } = props

  return (
    <>
      <EventViewContainer>
        <span>
          {event.title}
        </span>
        <span>
          {event.type}
        </span>
      </EventViewContainer>
    </>
  )
}
