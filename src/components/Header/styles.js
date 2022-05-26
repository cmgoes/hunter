import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 15px;
  display:flex;
  justify-content: center;
  background: ${props => props.theme.colors.cardColor};

  @media (min-width: 768px) {
    padding: 20px 30px;
  }
  @media (min-width: 1024px) {
    padding: 20px 50px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
`

export const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;

  > img {
    width: 120px;
  }

  @media (min-width: 993px) {
    margin-right: 20px;
    > img {
      width: 150px;
    }
  }

  @media (min-width: 1200px) {
    margin-right: 30px;
  }
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const MenuItem = styled.div`

  > span {
    font-size: 14px;
    padding: 8px 10px;
    color: ${props => props.theme.colors.gray};
    cursor: pointer;
    transition: all 0.3s linear;
  }

  ${({ active }) => active && css`
    > span {
      border-radius: 30px;
      background: ${props => props.theme.colors.backgroundColor};
      color: ${props => props.theme.colors.headingColor};
    }
  `}

  @media (min-width: 1200px) {
    span {
      font-size: 16px;
      padding: 10px 15px;
    }
  }
`

export const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  > input {
    height: 36px;
    width: 100%;
    padding-left: 35px;
    color: ${props => props.theme.colors.gray};
  }
  > svg {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 10px;
    color: ${props => props.theme.colors.gray};
  }
`

export const SearchWrapper = styled.div`
  margin-right: 20px;

  input {
    height: 36px;
    padding-left: 35px;
  }

  @media (min-width: 1200px) {
    margin-right: 30px;
    input {
      height: 45px;
    }
  }
`

export const SocialListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0px;

  @media (min-width: 993px) {
    justify-content: center;
    padding: 0px;
  }
`

export const SocialItem = styled.span`
  margin-right: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;

  > svg {
    font-size: 32px;
    color: ${props => props.theme.colors.gray};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.orange};
    }
  }

  @media (min-width: 993px) {
    margin-right: 10px;
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    margin-right: 20px;
  }
`

export const LoginWrapper = styled.div`
  display: flex;
  border-left: 1px solid ${props => props.theme.colors.gray};
  padding-left: 15px;
`

export const MobileMenuList = styled.div`
  position: fixed;
	top: 0px;
	left: 0px;
	right: inherit;
	z-index: 1100;
	width: 0%;
	height: 100%;
	transition: all 0.5s ease 0s;
	overflow: auto;
  background: ${props => props.theme.colors.backgroundColor};

  > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
	  font-size: 1.15em;
  }
`

export const MobileItem = styled.div`
	padding: 24px 24px 24px 0px;
  border-bottom: 1px solid #efefef;
	cursor: pointer;
	transition: all 0.3s linear;

  &:hover {
    color: #FFD029;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.orange};
  `}

  ${({ isMarginTop}) => isMarginTop && css`
    margin-top: 30px;
  `}
`

export const OverLay = styled.div`
  position: fixed;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background: #d8d8d84d;
	opacity: 1;
	transition: opacity 0.3s ease 0s;
	top: 0px;
	left: 0px;
`

export const MobileMenu = styled.div`
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  svg {
    width: 35px;
    cursor: pointer;
    transform: translateY(5px);
  }
`
export const UserPopoverContainer = styled.div`
  display: flex;
  align-items: center;
  > div:not(:first-child) {
    margin-left: 15px;
  }
`
