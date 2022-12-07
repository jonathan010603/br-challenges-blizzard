import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  setMobileDropdown: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

interface IGetDropdownState {
  isOpen?: boolean;
  page?: number;
}

const Menu__MobileDropdown = ({ open, setMobileDropdown }: IProps) => {
  const Menu__MobileDropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (Menu__MobileDropdownRef) {
      !Menu__MobileDropdownRef.current?.contains(e.target as HTMLElement) &&
        e.target !== document.getElementById("burgerDropdown") &&
        setMobileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <Container isOpen={open} ref={Menu__MobileDropdownRef}>
      <Menu__MobileStdUl>
        <li>Loja</li>
        <li>Notícias</li>
        <li>Suporte</li>
      </Menu__MobileStdUl>
      <Menu__MobileGamesUl>
        <li>
          <img src="/assets/ui/every.png" className="seeAllGames" />
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
        <li>
          <img src="/assets/ui/championship.png" />
          Torneios da comunidade
        </li>
      </Menu__MobileGamesUl>
    </Container>
  );
};

const Container = styled.div<IGetDropdownState>`
  left: 0;
  top: 0;
  z-index: 15;
  width: 100%;
  display: ${(p) => (p.isOpen ? "flex" : "none")};
  height: 95vh;
  position: absolute;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgb(14, 17, 23) 96.35%,
    rgb(14, 17, 23) 100%
  );
  backdrop-filter: blur(6px);

  ul {
    list-style: none;
  }
`;

const Menu__MobileStdUl = styled.ul`
  margin-top: 15vh;
  text-align: center;

  li {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const Menu__MobileGamesUl = styled.ul`
  font-size: 15px;
  margin-top: 30px;
  padding-left: 5.85vw;

  img {
    margin-right: 4vw;
  }

  li {
    margin-bottom: 20px;
  }

  .seeAllGames {
    width: 15px;
    margin-left: 7px;
  }
`;

const Menu__MobileBlueLine = styled.div`
  width: 90%;
  height: 1px;
  margin: 35px auto 20px auto;
  background: #00aeff;
`;

export default Menu__MobileDropdown;
