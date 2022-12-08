import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";
import Menu__DropdownWrapper1 from "./Menu__DropdownWrapper1";
import Menu__DropdownWrapper2 from "./Menu__DropdownWrapper2";

interface IProps {
  setDropdown: Dispatch<
    SetStateAction<{
      open: boolean;
      page: number;
    }>
  >;
  state: {
    open: boolean;
    page: number;
  };
}

interface IGetDropdownState {
  isOpen?: boolean;
  page?: number;
}

const Menu__Dropdown = ({ state, setDropdown }: IProps) => {
  const Menu__DropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (Menu__DropdownRef) {
      !Menu__DropdownRef.current?.contains(e.target as HTMLElement) &&
        e.target !== document.getElementById("gamesDropdown") &&
        e.target !== document.getElementById("sportsDropdown") &&
        setDropdown({ ...state, open: false });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <Container isOpen={state.open} page={state.page} ref={Menu__DropdownRef}>
      {state.page === 1 ? (
        <Menu__DropdownWrapper1 />
      ) : (
        <Menu__DropdownWrapper2 />
      )}
      <Menu__DropdownBottomBar page={state.page}>
        {state.page === 1 ? (
          <ul>
            <li>
              <img src="/assets/ui/every.png" />
              Ver todos os jogos
            </li>
            <li>
              <img src="/assets/ui/battlenet-blue.png" />
              Aplicativo Battle.net
            </li>
            <li>
              <img src="/assets/ui/downloads-blue.png" />
              Downloads
            </li>
            <li>
              <img src="/assets/ui/chat-blue.png" />
              Fórum dos jogos
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <img src="/assets/ui/championship.png" />
              Torneios da comunidade
            </li>
          </ul>
        )}
      </Menu__DropdownBottomBar>
    </Container>
  );
};

const Container = styled.div<IGetDropdownState>`
  left: 0;
  top: 0;
  z-index: 15;
  width: 100%;
  display: ${(p) => (p.isOpen ? "flex" : "none")};
  height: ${(p) => (p.page === 1 ? "640px" : "520px")};
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

const Menu__DropdownBottomBar = styled.div<IGetDropdownState>`
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
      ${(p) => p.page === 2 && "margin: 0"};
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
