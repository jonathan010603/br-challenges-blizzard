import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import styled, { StyledComponent } from "styled-components";
import { DropdownGames } from "../../data/DropdownData";
import { useFetch } from "../../hooks/useFetch";

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

interface IContainerProps {
  isOpen: boolean;
}

interface IDropdownGame {
  logo: string;
  name: string;
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
    <Container isOpen={state.open} ref={Menu__DropdownRef}>
      <Menu__DropdownElWrapper>
        {DropdownGames.map((game: IDropdownGame) => (
          <Menu__DropdownGame key={game.name}>
            <img src={game.logo} />
            <span>{game.name}</span>
          </Menu__DropdownGame>
        ))}
      </Menu__DropdownElWrapper>
      <Menu__DropdownBottomBar>
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
      </Menu__DropdownBottomBar>
    </Container>
  );
};

const Container = styled.div<IContainerProps>`
  left: 0;
  top: 0;
  z-index: 15;
  width: 100%;
  display: ${(p) => (p.isOpen ? "flex" : "none")};
  height: 86.95vh;
  position: absolute;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgb(14, 17, 23) 96.35%,
    rgb(14, 17, 23) 100%
  );
  backdrop-filter: blur(6px);
`;

const Menu__DropdownElWrapper = styled.div`
  width: 100%;
  padding: 0 112px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 134.53px;
  justify-content: space-between;
`;

const Menu__DropdownGame = styled.div`
  display: flex;
  width: 176px;
  height: 176px;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #9d9d9d;

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 8.6px;
  }

  span {
    max-width: 105.12px;
    text-align: center;
  }
`;

const Menu__DropdownBottomBar = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  max-height: 70px;
  background: #15171b;

  ul {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    align-self: center;
    margin-left: 21.94vw;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 4.44vw;
  }

  img {
    margin-right: 10px;
  }
`;

export default Menu__Dropdown;
