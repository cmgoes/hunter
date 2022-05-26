import React from 'react'
import { Button, Input, TextArea } from '../../../Shared'
import {
  ContactUsContainer,
  Title,
  InputWrapper,
  FormControl,
  TextAreaWrapper,
  ButtonWrapper
} from './styles'

export const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Title>Contact us</Title>
      <InputWrapper>
        <FormControl>
          <p>Username</p>
          <Input placeholder='Enter username' />
        </FormControl>
        <FormControl>
          <p>Email Address <span>*</span></p>
          <Input placeholder='Enter email' />
        </FormControl>
      </InputWrapper>
      <TextAreaWrapper>
        <FormControl>
          <p>Product description <span>*</span></p>
          <TextArea />
        </FormControl>
      </TextAreaWrapper>
      <ButtonWrapper>
        <Button color='orange' outline>Send</Button>
      </ButtonWrapper>
    </ContactUsContainer>
  )
}
