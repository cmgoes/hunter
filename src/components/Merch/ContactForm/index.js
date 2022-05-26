import React, { useState } from 'react'
import { Button, Modal } from '../../Shared'
import { ContactUs } from './ContactUs'
import {
  Container,
  DescriptionWrapper,
  ButtonWrapper
} from './styles'

export const ContactForm = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Container isGradient>
        <img src='/images/contact-bg1.png' className='image-small-1' alt='' />
        <img src='/images/contact-bg3.png' className='image-small-2' alt='' />
        <DescriptionWrapper>
          <p>
            If you also want to sell stuff with NFT prints,
            <span>fill out the form and we'll contact you</span>
          </p>
          {/* <span>More than 150 users filled out the form</span> */}
        </DescriptionWrapper>
        <ButtonWrapper>
          <Button
            color='orange'
            outline
            onClick={() => setOpenModal(true)}
          >Form</Button>
        </ButtonWrapper>
      </Container>
      <Modal
        width='550px'
        open={openModal}
        onClose={() => {
          setOpenModal(false)
        }}
      >
        <ContactUs />
      </Modal>
    </>
  )
}
