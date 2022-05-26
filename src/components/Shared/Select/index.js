import React, { useEffect, useRef, useState } from 'react'
import AiFillCaretDown from '@meronex/icons/ai/AiFillCaretDown'
import BisChevronDown from '@meronex/icons/bi/BisChevronDown'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  Header
} from './styles'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    notReload,
    notSelected,
    isCustomArrow,
  } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()
  const selectRef = useRef()
  const isOneOption = options?.length === 1;
  const handleSelectClick = (e) => {
    !open && setOpen(true)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !selectRef.current?.contains(e.target) && !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mouseup', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(option => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  const handleChangeOption = (option) => {
    if (!notSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
    setOpen(false)
  }

  return (
    isOneOption ? (
        <SelectInput>
            <Selected>
              <Header>
              {options[0].content}
              </Header>
            </Selected>
          </SelectInput>
    ):(
        <SelectInput
          id='select-input'
          disabled={!notReload}
          onMouseUp={handleSelectClick}
          ref={selectRef}
        >
          {!selectedOption && (
            <Selected>
              {placeholder || ''}
              <Chevron className='select-arrow'>
                {isCustomArrow ? <AiFillCaretDown /> : <BisChevronDown />}
              </Chevron>
            </Selected>
          )}
          {selectedOption && (
            <Selected>
              <Header>
                {selectedOption.showOnSelected || selectedOption.content}
              </Header>
              <Chevron className='select-arrow'>
                {isCustomArrow ? <AiFillCaretDown /> : <BisChevronDown />}
              </Chevron>
            </Selected>
          )}
          {open && options && (
            <Options id='list' position='right' ref={dropdownReference}>
              {
                options.map(option => (
                  <Option
                    className='item'
                    key={option.value}
                    selected={value === option.value}
                    onClick={() => handleChangeOption(option)}
                  >
                    {option.content}
                  </Option>
                ))
              }
            </Options>
          )}
        </SelectInput>
    )
  )
}
