import Image from "next/image";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { MobileDropdownContext } from "../../contexts/DropdownContext";
import Modal from "../Modal";
import Menu__Buttons from "./Menu__Buttons";
import Menu__Dropdown from "./Menu__Dropdown";
import Menu__MobileDropdown from "./Menu__MobileDropdown";
import Menu__UL from "./Menu__UL";

interface IGetMobileDropdownState {
  isOpen: boolean;
}

const Menu = () => {
  const ctx = useContext(MobileDropdownContext);

  if (ctx) {
    return (
      <>
        <Menu__MobileDropdown />
        <Menu__Dropdown />
        <Menu__Container>
          <Modal />
          <Menu__BlueLine></Menu__BlueLine>
          <Menu__Content isOpen={ctx.mobileDropdownOpen}>
            <Menu__Links>
              <Menu__Logo src="/assets/logo-blizzard.png" alt="" />
              <Menu__UL />
            </Menu__Links>
            <Menu__Buttons />
            <Image
              width={28}
              height={18.67}
              alt=""
              className="Menu__burger"
              id="burgerDropdown"
              src={
                ctx.mobileDropdownOpen
                  ? "/assets/ui/close.png"
                  : "/assets/ui/burger.png"
              }
              onClick={() => ctx.setMobileDropdownOpen(!ctx.mobileDropdownOpen)}
            />
          </Menu__Content>
        </Menu__Container>
      </>
    );
  } else {
    return <></>;
  }
};

const Menu__Container = styled.section`
  z-index: 20;
  width: 100%;
  display: flex;
  height: 13.04%;
  padding: 0 15.78vw;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 1470px) {
    padding: 0 7.77vw;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 6.5vw 0 5.85vw;
  }

  @media only screen and (max-width: 1200px) and (max-height: 599px) and (orientation: landscape) {
    height: 20%;
  }
`;

const Menu__Content = styled.div<IGetMobileDropdownState>`
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;

  .Menu__burger {
    width: 28px;
    cursor: pointer;
    margin-left: 11.62vw;
    height: ${(p) => (p.isOpen ? "28px" : "18.67")};

    @media only screen and (min-width: 1201px) {
      display: none;
    }

    @media only screen and (max-width: 560px) {
      margin-left: auto;
    }
  }
`;

const Menu__Links = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Menu__Logo = styled.img`
  width: 115.7px;
  height: 40px;

  @media only screen and (max-width: 1470px) {
    width: 86.77px;
  }

  @media only screen and (max-width: 680px) {
    width: 69.42px;
    height: 32px;
  }
`;

const Menu__BlueLine = styled.div`
  bottom: -1.5px;
  width: 43px;
  height: 1.5px;
  z-index: 20;
  position: absolute;
  background: #00aeff;
`;

export default Menu;
