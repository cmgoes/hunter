import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Calendar as CalendarController } from '../../components/Calendar'

export const Calendar = (props) => {
  return (
    <>
      <HelmetTags page='calendar' />
      <CalendarController {...props} />
    </>
  )
}
