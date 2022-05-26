import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import { DateRange, DefinedRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import FiCalendar from '@meronex/icons/fi/FiCalendar'
import { Button } from '../../../Shared'
import { CalendarContainer, ButtonWrapper, CalendarWrapper } from './styles'

export const CustomCalendar = (props) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const calendarRef = useRef()

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  const handleOpenCalendar = (evt) => {
    evt.preventDefault()
    setIsShowCalendar(true)
  }

  const handleChangeDates = (item) => {
    setDateRange([item.selection])
  }

  const dateFormat = (date1, date2) => {
    let formattedDate = `${moment(date1).format('YYYY-MM-DD')}~${moment(date2).format('YYYY-MM-DD')}`
    if (moment(date1).format('YYYY') === moment(date2).format('YYYY')) {
      if (moment(date1).format('MM') === moment(date2).format('MM')) formattedDate = `${moment(date2).format('MMM')} ${moment(date1).format('DD')} - ${moment(date2).format('DD')}, ${moment(date1).format('YYYY')}`
      else formattedDate = `${moment(date1).format('MM-DD')} ~ ${moment(date2).format('MM-DD')}, ${moment(date1).format('YYYY')}`
    }
    return formattedDate
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCalendar])

  return (
    <CalendarWrapper>
      <ButtonWrapper>
        <Button onClick={handleOpenCalendar}>
          <FiCalendar />
          {
            dateRange[0].startDate ? dateFormat(dateRange[0].startDate, dateRange[0].endDate) : 'Select Date Range'
          }
        </Button> 
      </ButtonWrapper>
      {
        isShowCalendar && (
          <CalendarContainer ref={calendarRef}>
            <DefinedRange
              onChange={item => handleChangeDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
            />
            <DateRange
              // editableDateInputs
              onChange={item => handleChangeDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              showDateDisplay={false}
            />
          </CalendarContainer>
        )
      }
    </CalendarWrapper>
  )
}
