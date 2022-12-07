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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  height: 60vh;
  min-height: 340px;
  position: absolute;
  padding: 15vh 5.85vw 0 5.85vw;
  backdrop-filter: blur(6px);
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgb(14, 17, 23) 96.35%,
    rgb(14, 17, 23) 100%
  );
  justify-content: space-between;
  display: ${(p) => (p.isOpen ? "flex" : "none")};

  @media only screen and (min-width: 1201px) {
    display: none;
  }

  @media only screen and (max-width: 420px) and (min-height: 600px) {
    flex-direction: column;
    height: 90vh !important;
  }

  @media only screen and (min-width: 376px) {
    padding: 20vh 5.85vw 0 5.85vw;
  }

  @media only screen and (max-height: 690px) {
    height: 50vh;
  }

  ul {
    list-style: none;
  }
`;

const Menu__MobileStdUl = styled.ul`
  text-align: left;

  li {
    font-size: 35px;
    margin-bottom: 10px;

    @media only screen and (max-height: 720px) {
      font-size: 30px;
    }

    @media only screen and (max-height: 690px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 40px !important;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 375px) {
      font-size: 25px !important;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 640px) {
      font-size: 21px;
    }

    @media only screen and (max-width: 325px) {
      font-size: 18px;
    }

    &:hover {
      color: #00aeff;
    }
  }
`;

const Menu__MobileGamesUl = styled.ul`
  font-size: 25px;
  padding: 10px 0 0 5.85vw;

  @media only screen and (max-height: 720px) {
    font-size: 20px;
  }

  @media only screen and (max-height: 690px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 420px) {
    padding-left: 0;
    font-size: 20px !important;
  }

  @media only screen and (max-width: 420px) {
    padding-left: 0;
    font-size: 16px !important;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 401px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 325px) {
    font-size: 10px;
  }

  img {
    margin-right: 4vw;
  }

  li {
    margin-bottom: 20px;

    @media only screen and (max-height: 690px) {
      margin-bottom: 15px;
    }

    @media only screen and (max-width: 420px) {
      margin-bottom: 30px;
    }

    &:hover {
      color: #00aeff;
    }
  }

  .seeAllGames {
    width: 15px;
    margin-left: 7px;
  }
`;

export default Menu__MobileDropdown;
