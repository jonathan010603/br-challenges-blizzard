import Image from "next/image";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { DropdownContext } from "../../contexts/DropdownContext";
import { transitionsTime } from "../../data/BannerHeroData";
import Menu__DropdownWrapper1 from "./Menu__DropdownWrapper1";
import Menu__DropdownWrapper2 from "./Menu__DropdownWrapper2";

interface IContainerProps {
  isDropdownOpen: boolean;
  currentPage: number;
}

interface IBottomBarProps {
  currentPage: number;
}

const Menu__Dropdown = () => {
  const ctx = useContext(DropdownContext);

  if (ctx) {
    return (
      <Container
        ref={ctx.Menu__DropdownRef}
        currentPage={ctx.dropdown.page}
        isDropdownOpen={ctx.dropdown.open}
      >
        {ctx.dropdown.page === 1 ? (
          <Menu__DropdownWrapper1 />
        ) : (
          <Menu__DropdownWrapper2 />
        )}
        <Menu__DropdownBottomBar currentPage={ctx.dropdown.page}>
          {ctx.dropdown.page === 1 ? (
            <ul>
              <li>
                <Image width={9} height={9} alt="" src="/assets/ui/every.png" />
                Ver todos os jogos
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/ui/battlenet-blue.png"
                />
                Aplicativo Battle.net
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/ui/downloads-blue.png"
                />
                Downloads
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/ui/chat-blue.png"
                />
                Fórum dos jogos
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/ui/championship.png"
                />
                Torneios da comunidade
              </li>
            </ul>
          )}
        </Menu__DropdownBottomBar>
      </Container>
    );
  } else {
    return <></>;
  }
};

const Container = styled.div<IContainerProps>`
  left: 0;
  top: 0;
  z-index: 15;
  width: 100%;
  display: ${(p) => (p.isDropdownOpen ? "flex" : "none")};
  height: ${(p) => (p.currentPage === 1 ? "640px" : "520px")};
  position: absolute;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgba(14, 17, 23, 0.92) 96.35%,
    rgba(14, 17, 23, 0.9) 100%
  );
  backdrop-filter: blur(6px);
  transition: all ${transitionsTime}s ease-out;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Menu__DropdownBottomBar = styled.div<IBottomBarProps>`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  margin-top: auto;
  max-height: 70px;
  background: #15171b;

  ul {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    align-self: center;
    margin: 0 auto;

    @media only screen and (min-width: 1730px) {
      margin: 0 auto;
    }
  }

  li {
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-right: 4.44vw;

    @media only screen and (min-width: 1730px) {
      text-align: center;
      ${(p) => p.currentPage === 2 && "margin: 0"};
    }

    &:hover {
      color: #00aeff;
    }
  }

  img {
    margin-right: 10px;
  }
`;

export default Menu__Dropdown;
