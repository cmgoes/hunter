import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSession } from '../../contexts/SessionContext'
import { useTheme } from 'styled-components'
import AiOutlineInstagram from '@meronex/icons/ai/AiOutlineInstagram'
import AiOutlineTwitter from '@meronex/icons/ai/AiOutlineTwitter'
import BilDiscord from '@meronex/icons/bi/BilDiscord'
import { useWindowSize } from "../../hooks/useWindowSize"
import { SearchBar } from './SearchBar'
import { SigninButton } from './SigninButton'
import { UserPopover } from './UserPopover'
import { CartButton } from './CartButton'
import {
  HeaderContainer,
  LeftContentWrapper,
  LogoWrapper,
  MenuListWrapper,
  Content,
  MenuItem,
  RightContentWrapper,
  SearchWrapper,
  SocialListWrapper,
  SocialItem,
  LoginWrapper,
  MobileMenuList,
  MobileItem,
  OverLay,
  MobileMenu,
  UserPopoverContainer
} from './styles'

export const Header = () => {
  const [{ auth }] = useSession()
  const history = useHistory()
  const location = useLocation()
  const theme = useTheme()
  const [isMenu, setIsMenu] = useState(false)
  const { width } = useWindowSize()

  const handleGoToPage = (path) => {
    history.push(path)
    setIsMenu(false)
  }

   return (
     <>
      <HeaderContainer>
        <Content>
          <LeftContentWrapper>
            <LogoWrapper onClick={() => history.push('/')}>
              <img src={theme.images.logo} alt='' />
            </LogoWrapper>
            {width >= 1155 && (
              <MenuListWrapper>
                <MenuItem
                  active={location.pathname === '/'}
                  onClick={() => history.push('/')}
                >
                  <span>Home</span>
                </MenuItem>
                <MenuItem
                  active={location.pathname.includes('/collections')}
                  onClick={() => history.push('/collections')}
                >
                  <span>All Collections</span>
                </MenuItem>
                <MenuItem
                  active={location.pathname.includes('/analytics')}
                  onClick={() => history.push('/analytics')}
                >
                  <span>Analytics</span>
                </MenuItem>
                <MenuItem
                  active={location.pathname.includes('/merch')}
                  onClick={() => history.push('/merch')}
                >
                  <span>Merch</span>
                </MenuItem>
                <MenuItem
                  active={location.pathname.includes('/advertise')}
                  onClick={() => history.push('/advertise')}
                >
                  <span>Advertise</span>
                </MenuItem>
              </MenuListWrapper>
            )}
          </LeftContentWrapper>
          <RightContentWrapper>
            {width > 500 && (
              <SearchWrapper>
                <SearchBar
                  placeholder='Search collections'
                  onSearch={val => console.log(val)}
                />
              </SearchWrapper>
            )}
            {width >= 1155 && (
              <>
                <SocialListWrapper>
                  <SocialItem>
                    <AiOutlineInstagram />
                  </SocialItem>
                  <SocialItem>
                    <AiOutlineTwitter />
                  </SocialItem>
                  <SocialItem>
                    <BilDiscord />
                  </SocialItem>
                </SocialListWrapper>
                <LoginWrapper>
                  {auth ? (
                    <UserPopover />
                  ) : (
                    <SigninButton />
                  )}
                </LoginWrapper>
                {auth && (
                  <CartButton />
                )}
              </>
            )}
          </RightContentWrapper>
          {width < 1155 && (
            <UserPopoverContainer>
              {auth && (
                <>
                  <UserPopover />
                  <CartButton />
                </>
              )}
              <MobileMenu onClick={() => setIsMenu(true)}>
                <MenuIcon />
              </MobileMenu>
            </UserPopoverContainer>
          )}
        </Content>
      </HeaderContainer>
      {width < 1155 && (
        <MobileMenuList style={{ width: isMenu ? "70%" : "0px" }}>
          <div>
            <img src={theme.images.logo} alt='' />
            <MobileItem
              onClick={() => handleGoToPage('/')}
              active={location.pathname === '/'}
            >
              Home
            </MobileItem>
            <MobileItem
              onClick={() => handleGoToPage('/collections')}
              active={location.pathname.includes('/collections')}
            >
              All Collections
            </MobileItem>
            <MobileItem
              onClick={() => handleGoToPage('/analytics')}
              active={location.pathname.includes('/analytics')}
            >
              Analytics
            </MobileItem>
            <MobileItem
              onClick={() => handleGoToPage('/merch')}
              active={location.pathname.includes('/merch')}
            >
              Merch
            </MobileItem>
            <MobileItem
              onClick={() => handleGoToPage('/advertise')}
              active={location.pathname.includes('/advertise')}
            >
              Advertise
            </MobileItem>
            {!auth && (
              <MobileItem isMarginTop>
                <SigninButton
                  onCloseSidebar={() => setIsMenu(false)}
                />
              </MobileItem>
            )}
            <SocialListWrapper>
              <SocialItem>
                <AiOutlineInstagram />
              </SocialItem>
              <SocialItem>
                <AiOutlineTwitter />
              </SocialItem>
              <SocialItem>
                <BilDiscord />
              </SocialItem>
            </SocialListWrapper>
          </div>
        </MobileMenuList>
      )}
      {isMenu && <OverLay onClick={() => setIsMenu(false)} />}
     </>

   )
}

const MenuIcon = (props) => {
  const { isHome } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill={isHome ? "white" : "#ff8800"}
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  );
};
