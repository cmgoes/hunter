import React, { useRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSession } from '../../../contexts/SessionContext'
import { usePopper } from 'react-popper'
import MdFavoriteBorder from '@meronex/icons/md/MdFavoriteBorder'
import HiOutlineCalendar from '@meronex/icons/hi/HiOutlineCalendar'
import FiLogOut from '@meronex/icons/fi/FiLogOut'
import BiWallet from '@meronex/icons/bi/BiWallet'

import {
  UserPhotoWrapper,
  PopoverBody,
  UserBalanceContainer,
  PopMenuItemsContainer,
  MenuItem
} from './styles'

export const UserPopover = () => {
  const [, { logout }] = useSession()
  const history = useHistory()

  const referenceElement = useRef()
  const popperElement = useRef()
  const [open, setOpen] = useState(false)

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-end',
    modifiers: [
      { name: 'arrow' },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open])
  
  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      setOpen(false)
    }
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '250px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  const handleGoToPage = (path) => {
    history.push(path)
    setOpen(false)
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <UserPhotoWrapper
        ref={referenceElement}
        onClick={() => setOpen(true)}
      >
        <img src='/images/user-3.png' alt='' />
      </UserPhotoWrapper>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <UserBalanceContainer>
          <UserPhotoWrapper isBig>
            <img src='/images/user-3.png' alt='' />
          </UserPhotoWrapper>
          <div>
            <h2>Denis Khodatenko</h2>
            <h3>$0,00 USD</h3>
            <span>0x0593...5976</span>
          </div>
        </UserBalanceContainer>
        <PopMenuItemsContainer>
          <MenuItem
            onClick={() => handleGoToPage('/watch-list')}
          >
            <MdFavoriteBorder />
            <span>Watchlist</span>
          </MenuItem>
          <MenuItem
            onClick={() => handleGoToPage('/calendar')}
          >
            <HiOutlineCalendar />
            <span>Calendar</span>
          </MenuItem>
        </PopMenuItemsContainer>
        <PopMenuItemsContainer noBorder>
          <MenuItem
            onClick={() => handleGoToPage('/profile-setting')}
          >
            <BiWallet />
            <span>Change Wallets</span>
          </MenuItem>
          <MenuItem
            onClick={() => logout()}
          >
            <FiLogOut />
            <span>Log out</span>
          </MenuItem>
        </PopMenuItemsContainer>
      </PopoverBody>
    </div>
  )
}
