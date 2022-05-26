import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { ProfileSetting as ProfileSettingController } from '../../components/ProfileSetting'

export const ProfileSetting = (props) => {
  return (
    <>
      <HelmetTags page='profileSetting' />
      <ProfileSettingController {...props} />
    </>
  )
}
