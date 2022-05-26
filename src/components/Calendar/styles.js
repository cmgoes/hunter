import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 50px 0;
  margin-bottom: 50px;
`

export const CalendarContainer = styled.div`
  height: 1900px;
  .rbc-calendar {
    background: ${props => props.theme.colors.cardColor};

    .rbc-time-header-content {
      border-left: none;
      .rbc-row.rbc-time-header-cell {
        background: ${props => props.theme.colors.backgroundColor};
        > .rbc-header {
          background: ${props => props.theme.colors.cardColor};
          &:first-child {
            border-top-left-radius: 16px;
          }
          &:last-child {
            border-top-right-radius: 16px;
          }
        }
      }
    }
    .rbc-time-view,
    .rbc-month-view {
      border: none;
    }

    .rbc-agenda-view table.rbc-agenda-table {
      border: 1px solid ${props => props.theme.colors.borderColor};
    }

    .rbc-off-range-bg {
      background: #303030;
    }

    .rbc-timeslot-group {
      border-bottom: none;
    }

    .rbc-header {
      border-bottom: none;
      padding: 20px 0;
    }

    .rbc-time-content {
      border-top: none;
    }

    .rbc-time-content > * + * > *,
    .rbc-header + .rbc-header,
    .rbc-day-bg + .rbc-day-bg,
    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    }
    .rbc-day-slot .rbc-time-slot,
    .rbc-month-row + .rbc-month-row {
      border-top: 1px solid ${props => props.theme.colors.borderColor};
    }
    .rbc-allday-cell {
      display: none;
    }

    .rbc-time-gutter.rbc-time-column,
    .rbc-label.rbc-time-header-gutter {
      background: ${props => props.theme.colors.backgroundColor};
    }

    .rbc-day-slot .rbc-event-label {
      display: none;
    }
    .rbc-event-content {
      display: flex;
      align-items: center;
    }
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  h1 {
    font-size: 28px;
    margin: 0;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      font-size: 42px;
    }
  }
`
export const SelectWrapper = styled.div`
  #select-input {
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 50px;
    color: white;
    > div:first-child {
      padding: 10px 20px;
    }
  }
`
export const ArrowButton = styled.div`
  cursor: pointer;
  border: 1px solid #707070;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #707070;
  }
`
export const DateLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 600;
  }

  .prev-btn {
    margin: 0 10px 0 20px;
  }
`
export const EventWrapperContainer = styled.div`
  > div {
    background: ${props => props.theme.colors.backgroundColor} !important;
    border: none !important;
    position: relative;
    &:before {
      content: "";
      background: #36804b;
      width: 7px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    ${({ preSale }) => preSale && css`
      &:before {
        background: #ff6332;
      }
    `}
  }
`
export const EventViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;

  > span {
    &:first-child {
      color: white;
      font-size: 16px;
      margin-bottom: 5px;
    }
    &:last-child {
      color: ${props => props.theme.colors.gray};
      font-weight: 300;
      font-size: 12px;
    }
  }
`
export const EventDetailsBody = styled.div`
  background-color: ${props => props.theme.colors.cardColor};
  border-radius: 8px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  margin-top: 15px;
`
