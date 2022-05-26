import React, { useEffect, useState } from 'react'
import { Button } from '../../Shared'
import BilApple from '@meronex/icons/bi/BilApple'
import RiBankCard2Line from '@meronex/icons/ri/RiBankCard2Line'

import { Modal, Select } from '../../Shared'
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import VscDebugRestart from '@meronex/icons/vsc/VscDebugRestart'
import MdcLock from '@meronex/icons/mdc/MdcLock'
import AiOutlineLoading3Quarters from '@meronex/icons/ai/AiOutlineLoading3Quarters'

import {
  Container,
  ContentWrapper,
  AppButtonWrapper,
  WidthCard,
  InputWRapper,
  PayButtonWrapper,
  ModalContent,
  CardInfoWrapper,
  CardNumberWrapper,
  CardDateWrapper,
  CountryWapper
} from './styles'

export const RightHero = () => {
  const [openModal, setOpenModal] = useState(false)
  const [processing, setProcessing] = useState(false)

  const countryOptions = [
    { value: 1, content: 'United States' },
    { value: 2, content: 'United Kingdom' },
    { value: 3, content: 'German' },
    { value: 4, content: 'France' },
    { value: 5, content: 'Italy' }
  ]
  useEffect(() => {
    if (!processing) return
    setTimeout(() => {
      setProcessing(false)
      setOpenModal(true)
    }, 2000)
  }, [processing])

  return (
    <Container>
      <ContentWrapper>
        <AppButtonWrapper>
          <Button
            color='black'
          >
            <BilApple />
            <span>Pay</span>
          </Button>
        </AppButtonWrapper>
        <WidthCard>
          <span>Or pay with card</span>
        </WidthCard>

        <InputWRapper>
          <p>Email</p>
          <input 
            type='email'
          />
        </InputWRapper>
        <CardInfoWrapper>
          <p>Card information</p>
          <div>
            <CardNumberWrapper>
              <input
                type='number'
                placeholder='4242 4242 4242'
              />
              <div>
                <img src='/images/visa.png' alt='' />
                <img src='/images/mastercard.png' alt='' />
                <img src='/images/amexcard.png' alt='' />
                <img src='/images/lastcard.png' alt='' />
              </div>
            </CardNumberWrapper>
            <CardDateWrapper>
              <div>
                <input type='text'
                  placeholder='MM / YY'
                />
              </div>
              <div>
                <input type='number'
                  placeholder='CVC'
                />
                <RiBankCard2Line />
              </div>
            </CardDateWrapper>
          </div>
        </CardInfoWrapper>
        <InputWRapper>
          <p>Name on card</p>
          <input 
            type='text'
          />
        </InputWRapper>

        <CountryWapper>
          <label>Country or Region</label>
          <div>
            <Select
              notReload
              options={countryOptions}
              defaultValue={1}
              onChange={name => console.log(name)}
            />
            <input
              type='number'
              placeholder='3600'
            />
          </div>
        </CountryWapper>
        <PayButtonWrapper
          processing={processing}
        >
          <Button
            color='black'
            onClick={() => setProcessing(true)}
          >
            <span>{!processing ? 'Pay' : 'Processing'}</span>
            {processing ? <AiOutlineLoading3Quarters /> : <MdcLock />}
          </Button>
        </PayButtonWrapper>
      </ContentWrapper>

      <Modal
        width='500px'
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalContent>
          <AiOutlineCheckCircle />
          <h4>Payment success</h4>
          <p>
            After a successful payment, the customer returns to your website.
          </p>
          <div>
            <button>
              Restart demo
              <VscDebugRestart />
            </button>
            <a href='/'>
              Explore the docs <BsArrowRight />
            </a>
          </div>
        </ModalContent>
      </Modal>
    </Container>
  )
}