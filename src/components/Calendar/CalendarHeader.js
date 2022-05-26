import React from 'react'
import { navigate } from 'react-big-calendar/lib/utils/constants'
import Toolbar from 'react-big-calendar/lib/Toolbar'
import { Select } from '../Shared'
import HiArrowRight from '@meronex/icons/hi/HiArrowRight'
import HiArrowLeft from '@meronex/icons/hi/HiArrowLeft'

import {
  Header,
  SelectWrapper,
  ArrowButton,
  DateLabel
} from './styles'

const viewOptions = [
  { value: 'month', content: 'Month' },
  { value: 'week', content: 'Week' },
  { value: 'work_week', content: 'Work week' },
  { value: 'day', content: 'day' },
  // { value: 'agenda', content: 'Agenda' }
]

class CalendarHeader extends Toolbar {
  render() {
		const { onView, label } = this.props
    return (
      <Header>
        <h1>Calendar</h1>

        <DateLabel>
          <span>
            {label}
          </span>
          <ArrowButton
            className='prev-btn'
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <HiArrowLeft />
          </ArrowButton>
          <ArrowButton
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <HiArrowRight />
          </ArrowButton>
        </DateLabel>

        <SelectWrapper>
          <Select
            notReload
            options={viewOptions}
            defaultValue='week'
            onChange={name => onView(name)}
          />
        </SelectWrapper>
      </Header>
    )
  }
}

export default CalendarHeader