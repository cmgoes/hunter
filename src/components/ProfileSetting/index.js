import React, { useRef, useState } from 'react'
import BiWallet from '@meronex/icons/bi/BiWallet'
import AiOutlineCamera from '@meronex/icons/ai/AiOutlineCamera'
import MdCopy from '@meronex/icons/ios/MdCopy'
import { Button, Input } from '../Shared'

import {
  Container,
  InnerContainer,
  Header,
  CardContainer,
  UserBalanceContainer,
  UserPhotoWrapper,
  CameraWrapper,
  TokenWrapper,
  InputsContainer,
  FormController,
  ButtonWrapper
} from './styles'

export const ProfileSetting = () => {
  const inputRef = useRef(null)
  const [userPhoto, setUserPhoto] = useState(null)
  const [formState, setFormState] = useState({})

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const handleUploadImage = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setUserPhoto(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <InnerContainer>
        <Header>
          <div>
            <h1>Profile Settings</h1>
            <img src='/images/setting.png' alt='' />
          </div>
          <div>
            <BiWallet />
            <span>Change wallets</span>
          </div>
        </Header>
        <CardContainer>
          <UserBalanceContainer>
            <UserPhotoWrapper
              onClick={handleClickImage}
            >
              <input
                type='file'
                accept='image/png, image/jpeg, image/jpg'
                onChange={handleUploadImage}
                ref={inputRef}
              />
              {userPhoto ? (
                <img src={userPhoto} alt='' />
              ) : (
                <img src='/images/user-3.png' alt='' />
              )}
              <CameraWrapper>
                <AiOutlineCamera />
              </CameraWrapper>
            </UserPhotoWrapper>
            <div>
              <h2>Denis Khodatenko</h2>
              <h3>$0,00 USD</h3>
              <TokenWrapper>
                <span>0x0593...5976</span>
                <MdCopy />
              </TokenWrapper>
            </div>
          </UserBalanceContainer>
          <InputsContainer>
            <FormController>
              <label>Username<span>*</span></label>
              <Input
                name='name'
                defaultValue=''
                onChange={e => handleChangeInput(e)}
                autoComplete='off'
              />
            </FormController>
            <FormController>
              <label>Email Address<span>*</span></label>
              <Input
                name='email'
                defaultValue=''
                onChange={e => handleChangeInput(e)}
                autoComplete='off'
              />
            </FormController>
          </InputsContainer>
          <ButtonWrapper>
            <Button
              outline
              color='orange'
            >
              Save
            </Button>
          </ButtonWrapper>
        </CardContainer>
      </InnerContainer>
    </Container>
  )
}
