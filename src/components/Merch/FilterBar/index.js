import React, { useState } from 'react'
import { FilterAccordion, Button } from '../../Shared'
import BiFilter from '@meronex/icons/bi/BiFilter'
import BsArrowLeftShort from '@meronex/icons/bs/BsArrowLeftShort'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import {
  FilterContainer,
  FilterHeader,
  AccordionContent,
  ButtonGroup,
  ExpandButton
} from './styles'

export const FilterBar = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  return (
    <FilterContainer isCollapse={isCollapse}>
      <FilterHeader>
        {!isCollapse && (
          <div>
            <span>Filter</span>
            <BiFilter />
          </div>
        )}
        {isCollapse ? (
          <ExpandButton
            onClick={() => setIsCollapse(false)}
          >
            <BsArrowRightShort />
          </ExpandButton>
        ) : (
          <BsArrowLeftShort
            onClick={() => setIsCollapse(true)}
          />
        )}
      </FilterHeader>
      {!isCollapse && (
        <>
          <FilterAccordion
            isForceOpen
            accordionHeader={
              <span>Price range</span>
            }
            accordionContent={
              <AccordionContent>
                <input
                  placeholder='10'
                />
                <input
                  placeholder='100'
                />
                <ButtonGroup>
                  <Button
                  
                  >
                    Clear
                  </Button>
                  <Button color='orange'>Apply</Button>
                </ButtonGroup>
              </AccordionContent>
            }
          />
          <FilterAccordion
            accordionHeader={
              <span>Listing Type</span>
            }
            accordionContent={
              <AccordionContent>
                <input
                  placeholder='10'
                />
                <input
                  placeholder='100'
                />
                <ButtonGroup>
                  <Button
                  
                  >
                    Clear
                  </Button>
                  <Button color='orange'>Apply</Button>
                </ButtonGroup>
              </AccordionContent>
            }
          />
          <FilterAccordion
            accordionHeader={
              <span>Trait filters</span>
            }
            accordionContent={
              <AccordionContent>
                <input
                  placeholder='10'
                />
                <input
                  placeholder='100'
                />
                <ButtonGroup>
                  <Button
                  
                  >
                    Clear
                  </Button>
                  <Button color='orange'>Apply</Button>
                </ButtonGroup>
              </AccordionContent>
            }
          />
        </>
      )}
    </FilterContainer>
  )
}