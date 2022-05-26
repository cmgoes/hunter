import React from 'react'
import {
  Container,
  UserInfoWrapper,
  DetailWrapper
} from './styles'

export const PassiveIncomeCard = () => {
  return (
    <Container>
      <UserInfoWrapper>
        <img src='/images/cyber-kongz.png' alt='' />
        <div>
          <h1>CyberKongz</h1>
          <p>Earns 10 BANANA per DAY</p>
        </div>
      </UserInfoWrapper>
      <DetailWrapper>
        <h1>$706.9</h1>
        <h4>Total Daily Earninds</h4>
        <p>5 minutes ago</p>
      </DetailWrapper>
    </Container>
  )
}
