import Image from "next/image";
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { MobileDropdownContext } from "../../contexts/DropdownContext";

interface IProps {
  setMobileDropdown: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

interface IGetDropdownState {
  isOpen?: boolean;
  page?: number;
}

const Menu__MobileDropdown = () => {
  const ctx = useContext(MobileDropdownContext);

  const handleClickOutside = (e: Event) => {
    if (ctx?.Menu__MobileDropdownRef) {
      !ctx?.Menu__MobileDropdownRef.current?.contains(e.target as HTMLElement) &&
        e.target !== document.getElementById("burgerDropdown") &&
        ctx.setMobileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, [handleClickOutside]);

  return (
    <Container isOpen={ctx?.mobileDropdownOpen} ref={ctx?.Menu__MobileDropdownRef}>
      <Menu__MobileStdUl>
        <li>Loja</li>
        <li>Notícias</li>
        <li>Suporte</li>
        <li className="Menu__SignupLI">Entrar</li>
      </Menu__MobileStdUl>
      <Menu__MobileGamesUl>
        <li>
          <Image
            width={15}
            height={15}
            alt=""
            src="/assets/ui/every.png"
            className="seeAllGames"
          />
          Ver todos os jogos
        </li>
        <li>
          <Image
            width={20}
            height={20}
            alt=""
            src="/assets/ui/battlenet-blue.png"
          />
          Aplicativo Battle.net
        </li>
        <li>
          <Image
            width={20}
            height={20}
            alt=""
            src="/assets/ui/downloads-blue.png"
          />
          Downloads
        </li>
        <li>
          <Image width={20} height={20} alt="" src="/assets/ui/chat-blue.png" />
          Fórum dos jogos
        </li>
        <li>
          <Image
            width={20}
            height={20}
            alt=""
            src="/assets/ui/championship.png"
          />
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
    height: 100vh !important;
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

  .Menu__SignupLI {
    @media only screen and (min-width: 561px) {
      display: none;
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

  .seeAllGames {
    width: 15px;
    margin-left: 4px;
  }

  li {
    display: flex;
    align-items: center;
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
`;

export default Menu__MobileDropdown;
