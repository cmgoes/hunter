import React, { useState, useRef, useEffect } from 'react'
import BisChevronDown from '@meronex/icons/bi/BisChevronDown'

import {
  AccordionSection,
  AccordionHeader,
  AccordionContent,
  TitleWrapper,
  ContentItem,
  ContentContainer
} from './styles'

export const UpcomingNFTSales = (props) => {
  const {
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
      >
        <TitleWrapper>
          <span>Upcoming NFT Sales</span>
          <img src='/images/upcoming.png' alt='' />
        </TitleWrapper>
        <BisChevronDown
          className={setRotate}
          onClick={(e) => toggleAccordion()}
        />
      </AccordionHeader>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <ContentContainer>
          <ContentItem>
            <span>Disclaimer: </span>
            Any information provided on this page including the featured project(s) should not be considered as financial or ivestment advice.
            The information is provided as-is with no gurantees. We cannot validate the claims or the trustworthiness of the projects listed.By using
            this information you agree to not take rarity.tools responsible for the results of your investment decisions resulting from it.
            Please do your own research!
          </ContentItem>
          <div>
            <ContentItem>
              <span>Warning: </span>
              We do not gurantee that the information provided here is 100% accurate. Please verify all information (such as final sale date/time) 
              from official project channels to be sure you don't miss the sale. Projects may change price, supply, sale date/time and/or other information
              without us knowing/
            </ContentItem>
            <ContentItem>
              <span>Notice: </span>
              This information is provided as a free service. Inclusion in this list does not mean we will automatically list and create ranking for the project.
            </ContentItem>
          </div>
        </ContentContainer>
      </AccordionContent>
    </AccordionSection>
  )
}