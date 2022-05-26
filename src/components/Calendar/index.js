import React, { useRef } from 'react'
import * as ReactDOM from 'react-dom'
import { Calendar as ScheduleCalendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { InnerContainer } from '../Layout'
import CalendarHeader from './CalendarHeader'
import { EventWrapper } from './EventWrapper'
import { EventView } from './EventView'

import {
  Container,
  CalendarContainer
} from './styles'


moment.locale('en-GB')
const localizer = momentLocalizer(moment)
const allViews = Object.keys(Views).map(k => Views[k]);

export const Calendar = () => {
	const headerEl = useRef(null);
  return (
    <Container>
      <InnerContainer>
        <div ref={headerEl} />
        <CalendarContainer>
          <ScheduleCalendar
            localizer={localizer}
            events={events}
            views={allViews}
            // startAccessor="start"
            // endAccessor="end"
            defaultDate={new Date(2022, 2, 1)}
            step={60}
            defaultView={Views.WEEK}
            // selectable
            showMultiDayTimes
            onSelectEvent={event => console.log(event)}
            components={{
              eventWrapper: EventWrapper,
              week: { event: EventView },
              toolbar: _props => {
                return headerEl.current
                  ? ReactDOM.createPortal(<CalendarHeader {..._props} />, headerEl.current)
                  : null;
              }
            }}
          />
        </CalendarContainer>
      </InnerContainer>
    </Container>
  )
}
