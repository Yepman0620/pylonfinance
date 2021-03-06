import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton';
import Nav from './components/Nav';
import Button from '../../components/Button'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      {/* <Container size="lg"> */}
      <StyledTopBarInner>
        <div style={{ display: "flex", height: "100%" }}>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <Nav />
        </div>
        <StyledAccountButtonWrapper>
          <AccountButton />
        </StyledAccountButtonWrapper>
      </StyledTopBarInner>
      {/* </Container> */}
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  box-sizing: border-box;
  width: 156px;
  height: 102%;
  border: 2px solid rgba(153,204,255,.2);
  background: rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100%;
  border: 2px solid #22476b;
  background: rgba(20,36,51,.8) linear-gradient(0deg,rgba(20,61,102,.2),rgba(20,61,102,0) 50%);
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${props => props.theme.topBarSize}px;
  justify-content: space-between;
  /* max-width: ${props => props.theme.siteWidth}px; */
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  min-width: 156px;
  height: 102%;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar