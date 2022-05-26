import styled, { css } from 'styled-components'

export const CalendarContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  margin-top: 18px;
  overflow: hidden;

  .rdrDefinedRangesWrapper {
    background: ${props => props.theme.colors.backgroundColor};
    border: none;
    display: flex;
    align-items: flex-end;
    width: 100%;
  
    .rdrStaticRanges {
      .rdrStaticRange {
        white-space: nowrap;
        background: ${props => props.theme.colors.backgroundColor};
        border-bottom: none;
        color: ${props => props.theme.colors.gray};
        &.rdrStaticRangeSelected {
          background: ${props => props.theme.colors.cardColor};
          color: white !important;
        }
        span:hover {
          background: ${props => props.theme.colors.cardColor};
        }
      }
    }
    .rdrInputRanges {
      display: none;
    }
  }

  .rdrDateRangeWrapper {
    background: ${props => props.theme.colors.backgroundColor};
    .rdrDateDisplayWrapper {
      background-color: transparent;
    }
    .rdrNextPrevButton {
      background: transparent;
    }
    .rdrMonthAndYearPickers select {
      color: white;
      option {
        color: white;
        background: ${props => props.theme.colors.backgroundColor};
      }
    }
    .rdrDateDisplayItem {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: none;
    }

    /* .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: ${props => props.theme.colors.gray};
    } */
    .rdrDayNumber span {
      color: ${props => props.theme.colors.gray};
      &::after {
        display: none;
      }
    }

    .rdrInRange ~ .rdrDayNumber span {
      color: white;
    }
    button {
      .rdrStartEdge,
      .rdrEndEdge,
      .rdrInRange {
        color: white !important;
        background: linear-gradient(#ffa633 0%, #ff5d2b 100%);
      }
    }

    .rdrWeekDays {
      .rdrWeekDay {
        color: white;
      }
    }
  }  
`

export const ButtonWrapper = styled.div`
  button {
    svg {
      margin-right: 10px;
    }
  }
`

export const CalendarWrapper = styled.div`
  position: relative;
`
