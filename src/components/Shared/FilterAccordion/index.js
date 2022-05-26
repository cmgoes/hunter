import React, { useState, useRef, useEffect } from 'react'
import BisChevronDown from '@meronex/icons/bi/BisChevronDown'

import {
  AccordionSection,
  AccordionHeader,
  AccordionContent,
} from './styles'

export const FilterAccordion = (props) => {
  const {
    accordionHeader,
    accordionContent,
    isForceOpen,
    isForceClose
  } = props
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
    props.onRotate && props.onRotate(
      setActive === 'active' ? '' : 'arrow-rotate'
    )
  }

  useEffect(() => {
    if (isForceOpen) {
      toggleAccordion()
    }
  }, [isForceOpen])

  useEffect(() => {
    if (isForceClose) {
      setActiveState('')
      setHeightState('0px')
    }
  }, [isForceClose])


  return (
    <AccordionSection>
      <AccordionHeader
        className={`accordion ${setActive}`}
        onClick={(e) => toggleAccordion()}
      >
        {accordionHeader}
        <BisChevronDown className={setRotate} />
      </AccordionHeader>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {accordionContent}
      </AccordionContent>
    </AccordionSection>
  )
}